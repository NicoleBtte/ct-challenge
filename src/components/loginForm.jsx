import { data } from 'autoprefixer';
import React from 'react'
import { useForm } from 'react-hook-form'

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
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