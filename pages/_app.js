import '@/styles/globals.css'
import { ContexProvider } from "@/app/context/MyContext"; // Adjust the path accordingly
import { AuthProvider } from '@/app/context/AuthContext';


export default function App({ Component, pageProps }) {
  //return  <ContexProvider>  <Component {...pageProps} />  </ContexProvider>
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
} 