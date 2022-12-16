'use client'

import { useContext } from 'react'
import { ProductContext } from '../context/product/product-context'
import ProductCard from './product-card'

const ProductsContainer = () => {
  const { products } = useContext(ProductContext)

  if (products.length === 0) {
    return <div className='text-center text-red-500 p-5'>No products</div>
  }

  return (
    <div className='flex flex-wrap gap-3 p-5'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsContainer
