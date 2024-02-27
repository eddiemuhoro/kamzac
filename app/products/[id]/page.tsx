import Image from 'next/image'
import React from 'react'
import { FC } from 'react'
import ProductImage from './Image'
import BuyButton from './BuyButton'

interface pageProps {
  params: { id: string }
}


const ProductDetails: FC<pageProps> = async ({ params }) => {


  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)

  const product = await res.json()




  return (
    <div className="container mx-auto  p-8 bg-slate-100 dark:bg-transparent">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <ProductImage productImage={product.image} />
        <div className='ml-8'>
          <h1 className='text-3xl font-bold'>{product.title}</h1>
          <p className='text-2xl font-semibold text-paragraphDark'>$ {product.price}</p>
          <p className='text-xl mt-5 mb-5 text-paragraphDark' >{product.description}</p>
          <div>
            <h3 className='text-xl font-semibold'>Specifications</h3>
            <div className='text-lg mt-5 mb-5'>
              <ul className='text-paragraphDark'>
                <li>Brand: {product.category}</li>
                <li>Rating: {product.rating.rate}</li>
                <li>Reviews: {product.rating.count}</li>
              </ul>
            </div>
          </div>
          <BuyButton productId={product.id} />

        </div>
      </div>
    </div>
  )
}

export default ProductDetails