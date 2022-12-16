import { Product } from '../types'

type Props = { product: Product }

const ProductCard = ({ product }: Props) => {
  return (
    <div className='border shadow hover:shadow-md cursor-pointer transition rounded-md flex flex-col items-center justify-center gap-2 p-5'>
      <div className='text-green-600 text-center text-lg'>{product.name}</div>
      <div className='text-slate-500 text-center'>{product.price}</div>
    </div>
  )
}

export default ProductCard
