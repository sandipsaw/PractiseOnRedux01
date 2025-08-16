import React, { useEffect } from 'react'
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'
import { asyncCurrentUser } from './store/UserAction'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(asyncCurrentUser())
  },[])
  return (
    <div className='w-screen h-screen bg-[#ECECBB] '>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App