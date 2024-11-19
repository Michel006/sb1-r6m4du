import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkPaymentStatus } from '../../services/paymentService';
import { useNotificationStore } from '../../store/useNotificationStore';

interface PaymentStatusProps {
  orderNumber: string;
}

export default function PaymentStatus({ orderNumber }: PaymentStatusProps) {
  const [status, setStatus] = useState<'pending' | 'success' | 'failed'>('pending');
  const navigate = useNavigate();
  const { addNotification } = useNotificationStore();

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const result = await checkPaymentStatus(orderNumber);
        
        setStatus(result.status === 'COMPLETED' ? 'success' : 'failed');
        
        addNotification({
          id: `payment-${orderNumber}`,
          type: 'payment',
          title: `Payment ${result.status === 'COMPLETED' ? 'Successful' : 'Failed'}`,
          message: `Your payment ${orderNumber} has ${result.status === 'COMPLETED' ? 'been completed' : 'failed'}`,
          createdAt: new Date(),
          read: false,
        });

        if (result.status === 'COMPLETED') {
          setTimeout(() => navigate('/dashboard'), 3000);
        }
      } catch (error) {
        setStatus('failed');
      }
    };

    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, [orderNumber, navigate, addNotification]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="text-center">
        {status === 'pending' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <h2 className="mt-4 text-xl font-semibold">Processing Payment</h2>
            <p className="mt-2 text-gray-600">Please wait while we confirm your payment...</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="mx-auto h-12 w-12 text-green-600">✓</div>
            <h2 className="mt-4 text-xl font-semibold text-green-600">Payment Successful</h2>
            <p className="mt-2 text-gray-600">Thank you for your payment. Redirecting...</p>
          </>
        )}

        {status === 'failed' && (
          <>
            <div className="mx-auto h-12 w-12 text-red-600">×</div>
            <h2 className="mt-4 text-xl font-semibold text-red-600">Payment Failed</h2>
            <p className="mt-2 text-gray-600">Something went wrong. Please try again.</p>
            <button
              onClick={() => navigate('/dashboard')}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Return to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
}