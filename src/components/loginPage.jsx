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
    <div className="p-20">
      <div className='flex items-center justify-center h-full'>
        <div className="w-2/5 h-full p-10 flex flex-col justify-center items-right bg-gradient-to-tr from-cyan-700 to-cyan-300">
          <h2 className="text-5xl text-white font-bold">¡Bienvenido</h2>
          <h3 className="font-semibold text-white text-4xl">al sitio web!</h3>
          &nbsp;
          <p className="text-xl text-white">Accede a tus reportes ingresando tus datos de inicio de sesión a continuación:</p>
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default LoginPage