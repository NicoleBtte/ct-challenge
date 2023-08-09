import { data } from 'autoprefixer';
import React from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../api/axiosClient';
import { useStateContext } from '../context/contextProvider';

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setUser , setToken } = useStateContext();

    const onSubmit = async (formData) => {
        console.log(formData)

        try{
            const result = await login(formData)
            console.log("Received data ",result.data)
            if(result.data.token){
                console.log("Successfull", result)
                setToken(result.data.token)
            }

        } catch(error){
            console.log("Error in login", error)
        }
    }

  return (
    <>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email:</label>
                <input type="text" {...register('email', {
                    required: true,
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                })}/>
                {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                {errors.email?.type === 'pattern' && <p role="alert">Emails pattern is incorrect</p>}
            </div>
            <div>
                <label>Password:</label>
                <input type="text" {...register('password', {
                    required: true
                })}/>
                {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
            </div>
            <button type="submit">
                Enviar
            </button>
        </form>
    </>
  )
}

export default LoginForm