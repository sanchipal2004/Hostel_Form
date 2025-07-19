import React from 'react'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate= useNavigate()
  const handlelogin =()=>{
    navigate("/Login")
  }
  return (
   <div className="container flex justify-between items-center h-96 p-5 my-32 mx-24 gap-1">
    <img className='w-max  m-32 'src="form1.png" alt="" />
    <div className="heading flex m-10 flex-col   gap-4">
    <span className='text-7xl font-serif font-bold '>Every Journey Starts With Responsibility</span>
    <span className='text-lg font-sans font-light'>Going home made simple and safe,just fill form in the detail and we'll take care of the rest.</span>
   </div>
   </div>
  )
}

export default Header