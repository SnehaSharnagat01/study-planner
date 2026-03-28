import React from 'react'
import logo from '../assets/logo.png'

const Navbar = ({setToggle}) => {
  return (
    <div className='h-20 w-full bg-[#222] mb-4 rounded-2xl px-10 flex items-center justify-between'>
        <img src={logo} alt="Image not found" className='h-[90%]' />
        <div className='flex items-center gap-10 text-lg'>
            <h2 className='cursor-pointer'>Home</h2>
            <h2 onClick={()=>{setToggle(true)}} className='cursor-pointer'>Cards</h2>
        </div>
        <button onClick={()=>{setToggle(false)}} className= 'text-blue-800 border-blue-800 border-2 p-2 rounded-lg cursor-pointer text-lg'>Add Session</button>
    </div>
  )
}

export default Navbar