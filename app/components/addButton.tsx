'use client'
import React, { FC } from 'react'
import { useRouter } from 'next/router';
interface AddButtonProps {
  id: number;
}

const AddButton: FC<AddButtonProps> = ({id}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${id}`)
  }

  return (
    <button onClick={handleClick}>
      Buy
    </button>
  )
}

export default AddButton