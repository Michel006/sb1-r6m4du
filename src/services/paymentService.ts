import { PaymentMethod } from '../types';

const FLEXPAY_API = {
  BASE_URL: 'https://backend.flexpay.cd/api/rest/v1',
  CARD_URL: 'https://cardpayment.flexpay.cd/v1.1/pay',
  TOKEN: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzkxMDI yMTQ3LCJzdWIiOiI5YWFlYjZmZTEwMThiNjYwMTk5ZDNmMjhmZTMyNTA0OSJ9.mWEU-eu3GnIiVshSVWaHCMwo6EYj53J9_A9C4vIN_60'
};

interface PaymentRequest {
  amount: number;
  currency: string;
  orderNumber: string;
  customerEmail: string;
  paymentMethod: PaymentMethod['type'];
  description: string;
}

export async function initiatePayment(request: PaymentRequest) {
  try {
    const response = await fetch(`${FLEXPAY_API.BASE_URL}/paymentService`, {
      method: 'POST',
      headers: {
        'Authorization': FLEXPAY_API.TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...request,
        returnUrl: window.location.origin + '/payment/callback',
      }),
    });

    if (!response.ok) {
      throw new Error('Payment initiation failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
}

export async function checkPaymentStatus(orderNumber: string) {
  try {
    const response = await fetch(`${FLEXPAY_API.BASE_URL}/check/${orderNumber}`, {
      headers: {
        'Authorization': FLEXPAY_API.TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error('Payment status check failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Status check error:', error);
    throw error;
  }
}