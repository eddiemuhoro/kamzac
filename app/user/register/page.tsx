
import React from 'react';
import RegisterForm from './RegisterForm';

const RegistrationForm = () => {

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-12 bg-white rounded shadow-xl w-96">
        <h1 className="text-xl font-bold mb-4">Register</h1>
       <RegisterForm />
      </div>
    </div>
  );
};

export default RegistrationForm;
