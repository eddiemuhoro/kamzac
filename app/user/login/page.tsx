import React from 'react'
import RegisterForm from '../register/RegisterForm'
import LoginForm from './LoginForm'

const LoginUser = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
    <div className="p-12 bg-white rounded shadow-xl w-96">
      <h1 className="text-xl font-bold mb-4">Login</h1>
        <LoginForm />
    </div>
    </div>

  )
}

export default LoginUser