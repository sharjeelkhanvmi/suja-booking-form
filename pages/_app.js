import '@/styles/globals.css'
import { PostalCodeProvider } from "./PostalCodeContext"; // Adjust the path accordingly


export default function App({ Component, pageProps }) {
  return  <PostalCodeProvider>  <Component {...pageProps} />  </PostalCodeProvider>
}