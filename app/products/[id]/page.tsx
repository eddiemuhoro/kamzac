import React from 'react'
import { FC } from 'react'

interface pageProps {
    params: {id: string}
}

const ProductDetails: FC<pageProps>  = ({params}) => {
  return (
    <div>ProductDetails: {params.id}</div>
  )
}

export default ProductDetails