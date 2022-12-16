import { createContext } from 'react'
import { Product } from '../../types'

type ProductContextType = {
  products: Product[]
  addProduct: (product: Product) => void
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  addProduct: (product: Product) => {}
})
