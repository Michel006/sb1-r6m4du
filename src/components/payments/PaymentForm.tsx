import React, { useState } from 'react';
import { useNotificationStore } from '../../store/useNotificationStore';
import { initiatePayment } from '../../services/paymentService';

interface PaymentFormProps {
  amount: number;
  description: string;
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export default function PaymentForm({ amount, description, onSuccess, onError }: PaymentFormProps) {
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'mobile_money' | 'card'>('mobile_money');
  const [isProcessing, setIsProcessing] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const orderNumber = `ORDER-${Date.now()}`;
      const response = await initiatePayment({
        amount,
        currency: 'USD',
        orderNumber,
        customerEmail: email,
        paymentMethod,
        description,
      });

      addNotification({
        id: orderNumber,
        type: 'payment',
        title: 'Payment Initiated',
        message: 'Your payment is being processed.',
        createdAt: new Date(),
        read: false,
      });

      onSuccess();
    } catch (error) {
      onError(error as Error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Payment Method
        </label>
        <div className="mt-2 space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="mobile_money"
              name="paymentMethod"
              value="mobile_money"
              checked={paymentMethod === 'mobile_money'}
              onChange={(e) => setPaymentMethod(e.target.value as 'mobile_money')}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="mobile_money" className="ml-3 block text-sm font-medium text-gray-700">
              Mobile Money
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value as 'card')}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
              Credit/Debit Card
            </label>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-3 text-right">
        <button
          type="submit"
          disabled={isProcessing}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isProcessing ? 'Processing...' : `Pay ${amount} USD`}
        </button>
      </div>
    </form>
  );
}