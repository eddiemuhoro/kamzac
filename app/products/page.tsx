import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddButton from '../components/addButton'

interface Product {
    id: number
    title : string
    price: number
    description: string
    image: string
}

// Helper function to truncate a title to a specified number of words
function truncateTitle(title: string, maxWords: number): string {
  const words = title.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return title;
}


const Products =  async () => {
    //fetch products
   const res = await fetch('https://fakestoreapi.com/products')
   await new Promise(resolve => setTimeout(resolve, 2000))
    const products: Product[] = await res.json()   
  
  return (
    <div className="container mx-auto py-8 px-8 bg-slate-100">
      <h1 className="text-3xl font-bold mb-4">Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="block rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-transform transform hover:scale-105 hover:shadow-lg bg-white">
            
              <div className="relative h-40">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{truncateTitle(product.title, 3)}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            
          </Link>
        ))}
      </div>
    </div>

  )
}

export default Products