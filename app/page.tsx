'use client'
import Image from 'next/image'
import Products from './products/page'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

export default function Home() {
  return (
    <Authenticator>
      {({ signOut, user }) => (

    <main className="flex min-h-screen flex-col items-center ">     
      <Products />
    </main>
      )}
    </Authenticator>
  )
}
