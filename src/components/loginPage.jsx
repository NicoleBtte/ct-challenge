import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
import LoginForm from './loginForm'

const LoginPage = () => {
  const {token} = useStateContext();

  if(token){
    return <Navigate to="/reports"/>
  }

  return (
    <>
      <div>LoginPage</div>
      <LoginForm></LoginForm>
    </>
  )
}

export default LoginPage