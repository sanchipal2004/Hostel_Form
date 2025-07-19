import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
const home = () => {
  return (
    <div>
      <div className="bgimg relative  ">
    <img className='opacity-40 fixed  ' src="hostel.png " alt="" />
   </div>
   <div className=" absolute mx-52 top-5">
    <Navbar/>
    </div>
     <div className=" absolute mx-16  top-52">
   < Header/>
   
   </div>
    </div>
  )
}

export default home
