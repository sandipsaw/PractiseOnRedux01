import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { asyncLoginUser } from '../store/UserAction'

const Login = () => {
  const dispatch = useDispatch()
  const {register, reset , handleSubmit} = useForm()
  
  const LoginHandler = (user) =>{
    dispatch(asyncLoginUser(user))
    
  }
  return (
    <div className='flex justify-center items-center mt-25'>
      <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col rounded border w-100 p-10 gap-10'>
        <input {...register('email')} type='email' placeholder='Enter Email : ' className='outline-none border-b text-2xl ' />
        <input {...register('password')} type='password' placeholder='Enter password: ' className='outline-none border-b text-2xl ' />
        <button className='border p-2 rounded bg-[#239BA7] text-2xl w-50 text-white font-semibold'>Login User</button>
        <p className='text-xl'>Dont have an Account <Link to='/register' className='text-blue-500 ml-5'>register
        </Link></p>
      </form>

    </div>
  )
}

export default Login