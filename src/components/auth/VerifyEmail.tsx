import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';

export default function VerifyEmail() {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Verify your email
        </h2>
        <div className="rounded-md bg-blue-50 p-4">
          <p className="text-sm text-blue-700">
            We've sent a verification email to <strong>{user?.email}</strong>.
            Please check your inbox and click the verification link to complete your registration.
          </p>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Didn't receive the email? Check your spam folder or contact support.
        </p>
      </div>
    </div>
  );
}