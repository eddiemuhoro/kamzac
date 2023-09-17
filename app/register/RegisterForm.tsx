'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const router = useRouter();
    const handleRegister = async (e: any) => {
        e.preventDefault();
        const name: string =  e.target.email.value;
        const email: string = e.target.email.value;
        const password: string =  e.target.email.value;

        const res = await fetch('https://usella.fly.dev/register', {
          body: JSON.stringify({
            name: e.target.name.value,
            email: email,
            password: e.target.password.value,
            // phoneNumber: e.target.phoneNumber.value,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
        const result = await res.json();
        console.log(email);
        localStorage.setItem('email', email)
        
        router.push(`/register/verify`)
        alert('You have successfully registered!, check email');
      };
    
  return (
    <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Name</label>
            <input name='name' className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" />
          </div>
        
          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input name='email' className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Password</label>
            <input name='password' className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="password" />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">Phone Number</label>
            <input name='phoneNumber' className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="tel" />
          </div>
          <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit"
            
            >
                Register
                </button>
        </form>
  )
}

export default RegisterForm