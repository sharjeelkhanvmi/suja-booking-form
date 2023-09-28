import Header from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#f8f8f8]'>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
