import React, { FC } from 'react';
import VerifyEmailForm from './VerifyEmailForm';


const VerifyEmailPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-12 bg-white rounded shadow-xl w-96">
        <h1 className="text-xl font-bold mb-4">Verify Email </h1>
       <VerifyEmailForm />
      </div>
    </div>
  );
};

export default VerifyEmailPage;
