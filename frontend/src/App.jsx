import React from 'react'
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#239BA7] '>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App