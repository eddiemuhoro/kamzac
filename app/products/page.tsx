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

const Products =  async () => {
    //fetch products
   const res = await fetch('https://fakestoreapi.com/products')
    const products: Product[] = await res.json()   
  
  return (
      <>
          <div>Products</div>
          <section className="flex flex-wrap">

              {products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1">
                 
                      <div className="w-full"> {/* Set the container dimensions */}
                          <Image
                              src={product.image}
                              alt="Picture of the author"
                              width={230}
                              height={208}
                             layout='responsive'
                             objectFit='cover'
                          />
                      </div>

                      <h3>{product.title}</h3>
                      <p>{product.price}</p>

                      <AddButton id={product.id} />
                 
                </Link>
              ))}

          </section>
      </>

  )
}

export default Products