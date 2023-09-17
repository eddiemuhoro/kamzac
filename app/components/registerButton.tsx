'use client'
import React, { FC } from 'react'

interface RegisterButtonProps {
    handleRegister: (e: any) => void;
}

const RegisterButton: FC<RegisterButtonProps> = ({handleRegister}) => {
  return (
    <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit"
          onClick={handleRegister}
          >
            Register
          </button>
  )
}

export default RegisterButton