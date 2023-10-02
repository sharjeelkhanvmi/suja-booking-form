import React, { useContext } from 'react'
import Form from '../components/Form'
import { PostalProvider } from './Helper/Context' 
import MyContext from './Helper/Context'
// Import the context from context.jsx



const Index = () => {
  try {
    const { postal } = useContext(MyContext);
    console.log(postal);
  } catch (error) {
    console.error("Context error:", error);
  }

  
  return (
    <PostalProvider> 
      Abc
      <Form />
    </PostalProvider>
  )
}

export default Index;
