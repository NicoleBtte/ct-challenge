import { data } from 'autoprefixer';
import React from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../api/axiosClient';
import { useStateContext } from '../context/contextProvider';

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setUser , setToken, setTribe } = useStateContext();

    const onSubmit = async (formData) => {
        console.log(formData)

        try{
            const result = await login(formData)
            console.log("Received data ",result)
            if(result.jwtToken){
                console.log("Successfull", result)
                setToken(result.jwtToken)
                setUser(result.userId)
                setTribe(result.tribeId)
            }

        } catch(error){
            console.log("Error in login", error)
        }
    }

  return (
    <div className="w-2/5 h-full bg-white p-20 items-center">
        <div className="items-center justify-center flex">
            <h2 className="text-3xl text-cyan-600 font-semibold">Iniciar sesión</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10">
                <label>Correo electrónico:</label>
                <input className="w-full mt-1 p-1 rounded-2xl border-2 border-cyan-500" type="text" {...register('email', {
                    required: true,
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                })}/>
                {errors.email?.type === 'required' && <p className="text-xs text-red-700" role="alert">El correo electrónico es requerido</p>}
                {errors.email?.type === 'pattern' && <p className="text-xs text-red-700" role="alert">El formato del correo electrónico es incorrecto</p>}
            </div>
            <div className="mt-5">
                <label>Contraseña:</label>
                <input className="w-full p-1 rounded-2xl border-2 border-cyan-500" type="password" {...register('password', {
                    required: true
                })}/>
                {errors.password?.type === 'required' && <p className="text-xs text-red-700" role="alert">La contraseña es requerida</p>}
            </div>
            <div className="mt-10 flex justify-center">
                <button className="bg-cyan-600 w-full p-1 rounded-2xl text-white text-lg active:scale-95 active:duration-75 transition-all hover:scale-1.01 ease-in-out" type="submit">
                    Ingresar
                </button>
            </div>

        </form>
    </div>
  )
}

export default LoginForm