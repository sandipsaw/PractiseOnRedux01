import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-[#7ADAA5] font-semibold flex gap-10 justify-center text-2xl h-15 items-center'>
        <NavLink className={(e)=> e.isActive ? "text-[#E1AA36]" :""} to='/' >Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-[#E1AA36]" :""} to='/product' >Product</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-[#E1AA36]" :""} to='/create-product' >Create Product</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-[#E1AA36]" :""} to='/service' >Service</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-[#E1AA36]" :""} to='/register' >Login</NavLink>
    </div>
  )
}

export default Nav