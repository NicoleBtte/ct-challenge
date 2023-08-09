import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'

const LoginPage = () => {
  const {token} = useStateContext();

  if(token){
    return <Navigate to="/reports"/>
  }

  return (
    <div>LoginPage</div>
  )
}

export default LoginPage