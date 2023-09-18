'use client'
import React, { FC, useState } from 'react'
import { useRouter } from 'next/navigation';


const VerifyEmailForm = () => {
  const router = useRouter()
    const [code, setCode] = useState('');
    

    const handleVerify = async (e: any) => {
      e.preventDefault();

       const email:any = localStorage.getItem('email')

      const code: string = e.target.code.value
      // Call your API to verify the code
      const res = await fetch(`https://usella.fly.dev/users/verify/${email}/${code}`, {
        method: 'PUT',
      });
      if (res.status === 200) {
        // If the status code is 200, the verification was successful
        alert('Email verified successfully!');
        router.push('/products');
      } else {
        // If the status code is anything other than 200, the verification failed
        alert('The code entered is not correct. Please try again.');
      }
    };
  
  return (
    <form onSubmit={handleVerify}>
    <div className="mb-4">
      <label className="block text-sm mb-2">Enter the code sent to your email</label>
      <input
       name='code'
        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>
    <button
      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Verify
    </button>
  </form>
  )
}

export default VerifyEmailForm