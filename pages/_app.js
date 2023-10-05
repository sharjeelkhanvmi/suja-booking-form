import '@/styles/globals.css'
import { ContexProvider } from "@/app/context/MyContext"; // Adjust the path accordingly


export default function App({ Component, pageProps }) {
  return  <ContexProvider>  <Component {...pageProps} />  </ContexProvider>
}