 'use client'
import Image from 'next/image';
import { FC, useState } from 'react';

interface ProductImageProps {
    productImage: string;
    }

const sampleImages = [
    'https://images.unsplash.com/photo-1696388222059-99e3dd923909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1682687982502-1529b3b33f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1695653422872-9bd1e29fe490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80',
  ]
const ProductImage: FC<ProductImageProps> = ({productImage}) => {
const [selectedImage , setSelectedImage] = useState(productImage)
    return (
        <div className=' '>
        <div className='relative h-96 '>
      <Image src={selectedImage} alt='{product.title}' layout='fill' objectFit='contain' className=' transition-transform duration-200' />
      </div>
      <div>
        <div className='flex gap-4 '>
          {sampleImages.map((image, index) => (
            <div key={index} className='relative h-28 w-28'>
              <Image src={image} alt={selectedImage} layout='fill' objectFit='contain' className='hover:scale-105 transition-transform duration-200' onClick={() => setSelectedImage(image)} />
            </div>
          ))}
          </div>

      </div>
      </div>
    );
};

export default ProductImage;
