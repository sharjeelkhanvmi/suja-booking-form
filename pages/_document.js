import Header from '@/app/components/header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#f8f8f8]'>
        <Header>
          <Main />
          <NextScript />
        </Header>
      </body>
    </Html>
  )
}
