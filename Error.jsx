import React from 'react'
import { useNavigate } from 'react-router-dom'


const Error = () => {
    const navigate =useNavigate()
    const handleback =()=>{
        navigate("/")
    }
  return (
    <div>
      <div className="nopage flex justify-center items-center p-64">
        <div className=""><img className='w-96 m-4  h-auto' src="/public/404 (1).png" alt="" /></div>
        <div className="errorcard flex flex-col ">
            <h1 className='text-5xl font-bold'>Error Not Found{404}</h1>
            <span className='text-3xl font-semibold'>Something Went</span><span className='text-4xl font-bold'> WRONG!</span>
            <span className='text-md '>Oops!The page that you are looking for doesn't exist</span>
            <div className="button my-2 bg-blue-700 w-32 p-2 text-center text-white">
            <button onClick={handleback}>Go Back</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Error
