import Image from 'next/image'
import Products from './products/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">     
      <Products />
    </main>
  )
}
