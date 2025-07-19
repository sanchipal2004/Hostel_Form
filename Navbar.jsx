import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  
  const navigate = useNavigate()
  const handlelogin=()=>{
    navigate("/login")
  
  }

    const handleabout=()=>{
    navigate("/about")
    }
    const handlehome=()=>{
      navigate("/")
    }
    const handleform=()=>{
      navigate("/form")
    }
  const handlelogout=()=>{
    localStorage.removeItem("authtoken")
    navigate('/login')
  }

  return (
    <div className="navbar"> 
      
        <div className="container flex justify-between mx-52 p-10    "> 
          <span className='font-bold text-4xl'>
         <img className='-m-2 ' src="logo.png" alt="" />
          </span>
          <ul className='flex  font-sans text-xl font-bold items-center'>
          <li onClick={handlehome} className='text-blue-600 m-2 cursor-pointer'>Home</li>
          <li onClick={handleabout} className='m-2 cursor-pointer'>About</li>
          <li onClick={handleform} className='cursor-pointer'>Services</li>
          </ul>
          <div className="button flex gap-5">
            <button className='bg-blue-600 text-xl font-bold text-white items-center w-48 h-12 p-2 rounded-full cursor-pointer' onClick={handlelogout}>LogOut</button>
            <button className='bg-blue-600 text-xl font-bold text-white items-center w-48 h-12 rounded-full cursor-pointer '  onClick={handlelogin}>Login</button>
          </div>
          
      
          
        </div>
    </div>
  )
}
export default Navbar