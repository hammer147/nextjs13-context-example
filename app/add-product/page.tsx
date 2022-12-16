'use client'

import { useContext, useEffect, useRef, useState } from 'react'
import { ProductContext } from '../../context/product/product-context'

const AddProductPage = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const nameInputRef = useRef<HTMLInputElement>(null)

  const { addProduct } = useContext(ProductContext)

  useEffect(() => nameInputRef.current?.focus(),[])

  const handleAddProduct = () => {
    addProduct({ name, price })
    setName('')
    setPrice(0)
    nameInputRef.current?.focus()
  }

  return (
    <div className='grid grid-cols-2 gap-2 p-2'>
      <div>
        <label className='p-2 m-2'>Name</label>
        <input
          ref={nameInputRef}
          className='border-2'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label className='p-2 m-2'>Price</label>
        <input
          className='border-2'
          type='number'
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        />
      </div>
      <button
        className='col-span-2 w-52 place-self-center bg-violet-500 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75'
        onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  )
}

export default AddProductPage
