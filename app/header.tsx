import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-gradient-to-b from-sky-200 to-sky-50 p-2  '>
      <ul className='flex gap-10'>
        <li className='text-sky-600'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='text-sky-600'>
          <Link href={'/add-product'}>Add Product</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
