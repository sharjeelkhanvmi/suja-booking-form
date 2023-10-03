import '@/styles/globals.css'
import { PostalCodeProvider } from "@/app/context/MyContext"; // Adjust the path accordingly


export default function App({ Component, pageProps }) {
  return  <PostalCodeProvider>  <Component {...pageProps} />  </PostalCodeProvider>
}