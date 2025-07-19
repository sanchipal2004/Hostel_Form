import React, { useEffect, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import { useForm, } from 'react-hook-form';



const Login = () => {
  const navigate=useNavigate()
  const handlehome =()=>{
    navigate("/")
  }
  const handleabout=()=>{
    navigate("/about")
  }
const [formdata,setformdata]=useState({
  FirstName:"",
  LastName:"",
  Email:"",
  Password:"",
})

//afterlogin 
const authtoken = localStorage.getItem("authtoken");
const tokenparsed = JSON.parse(authtoken);

useEffect(()=>{
  if(tokenparsed){
  navigate('/form')}

},[tokenparsed]);





 const handlechange=(e)=>{
  const {name, value}= e.target;

  setformdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
 }
 //complusory
 const handlelogin=()=>{
if(!formdata?.FirstName || !formdata?.LastName || !formdata?.Email || !formdata?.Password){
  alert("please enter all the details")
  return null;
}
 
localStorage.setItem("authtoken", JSON.stringify(formdata))
  navigate('/form')
 
 }



  const  {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();

   const onSubmit= async (data)=>{
console.log("submitting the login form",data)
await new Promise((resolve)=>{
  setTimeout((resolve,5000))
}) 
}

  return (
    <div>
      <div className="navbar">   
        <div className="container flex justify-between mx-52 m-9 p-3  ">
          <span className='font-bold text-4xl'>Hostel form</span>
          <ul className='flex  font-sans text-xl font-bold items-center'>
          <li onClick={handlehome} className='text-blue-600 m-2 cursor-pointer'>Home</li>
          <li onClick={handleabout} className='m-2 cursor-pointer'>About</li>
          <li>Contact</li>
          </ul>
          </div>
      <div className="wrapper ">
      <form className="form " onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>

        <div className="flex">
          <label>
            <input className="input" type="text" {...register('FirstName', {required: true, minLength: 3 })} 
            onChange={handlechange}
            value={formdata.FirstName}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input className="input" type="text" {...register('LastName',{required: true, minLength: 3})} 
            
            onChange={handlechange}
            value={formdata.LastName}/>
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" {...register('Email',{required: true})}
          onChange={handlechange}
          value={formdata.Email} />
          <span>Email</span>
        </label>

        <label>
          <input className="input" type="password" {...register('Password',{required: true, minLength: 6})}
          onChange={handlechange}
          value={formdata.Password} />
          <span>Password</span>
        </label>

        
        <button onClick={handlelogin} disabled={isSubmitting} className="submit">Submit</button>
        <p className="signin">
          Already have an account? <a href="/form"> Form</a>
        </p>
      </form>
    </div>
    <div className="instruction flex flex-col items-center  m-7 p-1">
      <span>By signing in or creating an account,fill the form.</span>
      <span >All Rights Reserved.</span>
      <span> © 2025. S.A.T.I. Vidisha.</span>
    </div>
          </div>
        

    </div>
  );
}

export default Login
