import React from 'react'
import Form from './form'
import Layout from '@/app/components/Layout'
import { useAuth } from '@/app/context/AuthContext';

const index = () => {
  const {userRole, isLoggedIn} = useAuth();
  console.log(userRole,isLoggedIn);
  return (
    <div >
      <Layout>
        <Form />
      </Layout>
      
    </div>
  )
}

export default index