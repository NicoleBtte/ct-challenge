import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider';

const SuccessLogin = () => {
  const { token } =  useStateContext();

  if(!token){
    return <Navigate to="/"/>
  }

  return (
    <div>SuccessLogin</div>
  )
}

export default SuccessLogin