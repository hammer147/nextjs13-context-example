import Link from 'next/link'
import ProductContextProvider from '../context/product/product-context-provider'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='h-screen flex flex-col items-center'>
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
        <ProductContextProvider>{children}</ProductContextProvider>
      </body>
    </html>
  )
}
