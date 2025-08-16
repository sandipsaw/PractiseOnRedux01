import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { asyncRigsterUser } from '../store/UserAction'
import { nanoid } from '@reduxjs/toolkit'
const Register = () => {
  const dispatch = useDispatch()
  const {register, reset , handleSubmit} = useForm()
  const navigate = useNavigate();
  const RegisterHandler = (user) =>{
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncRigsterUser(user))
    navigate('/login')
    reset();
  }

  return (
    <div className='flex justify-center items-center mt-25'>
      <form onSubmit={handleSubmit(RegisterHandler)} className='flex flex-col rounded border w-100 p-10 gap-10'>
        <input {...register('username')} type='text' placeholder='UserName : ' className='outline-none border-b text-2xl' />
        <input {...register('email')} type='email' placeholder='Enter Email : ' className='outline-none border-b text-2xl ' />
        <input {...register('password')} type='password' placeholder='Enter password: ' className='outline-none border-b text-2xl ' />
        <button className='border p-2 rounded bg-[#239BA7] text-2xl w-50 text-white font-semibold'>Register User</button>
        <p className='text-xl'>Already have an Account <Link to='/login' className='text-blue-500 ml-5'>Login
        </Link></p>
      </form>

    </div>
  )
}

export default Register