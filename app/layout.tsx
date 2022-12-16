import ProductContextProvider from '../context/product/product-context-provider'
import Header from './header'
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
        <Header />
        <ProductContextProvider>
          <main>{children}</main>
        </ProductContextProvider>
      </body>
    </html>
  )
}
