import Header from '@/app/components/header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#f4f7fe]'>
        <Header>
          <Main />
          <NextScript />
        </Header>
      </body>
    </Html>
  )
}
