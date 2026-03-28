import React, { useState } from 'react'
import SessionForm from "./components/SessionForm"
import SessionList from "./components/SessionList"
import Navbar from './components/Navbar'

const App = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div className='min-h-screen w-full bg-[#111] text-white px-2 py-2'>
      <Navbar setToggle={setToggle} />

      {toggle ? <SessionList setToggle={setToggle} /> : <SessionForm setToggle={setToggle} />}
    </div>
  )
}

export default App