'use client'

import { ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Product } from '../../types'
import { ProductContext } from './product-context'

type Props = { children: ReactNode }

const ProductContextProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([])

  const addProduct = (product: Product) => {
    product.id = uuidv4()
    setProducts(prevProducts => [...prevProducts, product])
  }

  return (
    <ProductContext.Provider value={{ products, addProduct }}>{children}</ProductContext.Provider>
  )
}

export default ProductContextProvider
