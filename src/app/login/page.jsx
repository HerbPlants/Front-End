import FormLogin from '@/components/layout/form/LoginForm';
import React from 'react'

const LoginPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto min-h-[30vh] md:min-h-[50vh] flex justify-center items-center py-10'>
      <FormLogin/>
    </div>
  )
}

export default LoginPage;