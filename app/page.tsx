'use client'
import Image from 'next/image'
import Products from './products/page'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { ThemeSwitcher } from './components/navigation/navbar/Button';

export default function Home() {
  return (
   

    <main className="flex relaative min-h-screen flex-col items-center ">     
      <Products />
    </main>
  
  )
}
