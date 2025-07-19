import React from 'react'
import Navbar from '../components/Navbar'
import {useForm} from 'react-hook-form'
const Form = () => {

const  {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const  onSubmit = async (data) =>{
    const response = await fetch('http://localhost:3000/api/form', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    await new Promise((resolve)=>{
      setTimeout((resolve, 5000));
    })
  }

  return (
    <div className=''>
    <div className="mx-24 p-2">
      <Navbar/></div>
      <div className="formcontainer bg-blue-600  w-max mx-auto  p-10 rounded-3xl ">
       <div className="formitems    rounded-md flex flex-col items-center mx-auto w-max bg-white p-5">
         <img className='w-24' src="satilogo.png" alt="" />
       <h1 className=' text-4xl font-sans font-bold py-2'>SAMRAT ASHOK TECHNOLOGICAL INSTITUTE</h1>
            <span className=' text-3xl font-sans font-bold text-center'>Kalpana Chawala Girls Hostel</span>
        <h1 className='text-3xl font-bold p-1'>Pre-Requisition Form </h1>
        <span className='text-sm font-medium'>please enter the proper detail</span>
     
     
      <form className='items-center  flex flex-col h-full  p-10 ' onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label className='mx-48 font-bold text-lg '> FirstName:</label>
       <input className='mx-24' placeholder='FirstName' {...register('firstname',{ required: true , minLength:{value: 3 }, pattern: { value: /^[A-Za-z]+$/i, message:'only characters are allowed'} })}
        type='text'/>
      {errors.firstname && <p>{errors.firstname.message}
        </p>}
       </div>
       <br/>
       <div>
        <label className='mx-48 font-bold text-lg'> LastName:</label>
       <input className='mx-24' placeholder='LastName' {...register('lastname',{ required: true , minLength:{value: 3, message:'minlength is 3' }, pattern: { value: /^[A-Za-z]+$/i, message:'only characters are allowed'} })}/>
      {errors.lastname && <p>{errors.lastname.message} </p>}
      </div>
         <br/>
       <div>
        <label className='mx-48 font-bold text-lg'> Scholar No.:</label>
       <input className='mx-20' placeholder='Scholar No.' {...register('scholarno.',{ required: true , maxLength: 5 })} type='number'/>
       </div>
         <br/>
       <div>
        <label className='mx-48 font-bold text-lg'>Mobile No.:</label>
       <input className='mx-20' placeholder='Mobile No.' {...register('mobileno.',{ required: true, minLength: 10 },)} type='number'/>
       </div>
         <br/>
       <div >
        <label className='mx-48 font-bold text-lg'>Room No.:</label>
       <input className='mx-24' placeholder='Room No'{...register('roomno.',{ required: true, minLength: 1, maxLength:3})} />
       </div>
         <br/>
         <div >
        <label className='mx-40 font-bold text-lg '>Parents Mobile No.:</label>
        
       <input className='mx-16' placeholder='Mobile No.' {...register('parentsmobileno.',{ required: true, minLength: 10 })}/>
      
       </div>
       <br/>
       <div >
        <label className='mx-32 font-bold text-lg ' >Reason For Staying Outside:</label>
       <input className='mx-9'  placeholder='Reason' {...register('reasonforstayingoutside',{ required: true })}/>
       </div>
         <br/>
       
       <div>
        <label className='mx-40 font-bold text-lg' >OutGoing Date:</label>
       <input className='mx-24' placeholder='' {...register('outgoingdate',{ required: true })}type='date'/>
       </div>
       <br/>
       <div>
       <label className='mx-32 font-bold text-lg'>OutGoing Time:</label>
       <input className='mx-32'{...register('outgoingtime',{ required: true })}type='time'/>
       </div>
       <br/>
       <div >
        <label className='mx-40 font-bold text-lg'>Incoming Date:</label>
       <input className='mx-24'{...register('incomingdate',{ required: true })}type='date'/>
       </div>
        <br/>
       <div>
       <label className='mx-32 font-bold text-lg'>Incoming Time:</label>
       <input className='mx-32' {...register('incomingtime',{ required: true })}type='time'/>
       </div>
       <br/>
       <input className='bg-blue-600 w-32 p-2 text-xl font-bold text-white' disabled={isSubmitting} type='submit'value={isSubmitting ? "submitting" : "submit"}/>
      </form>
</div>
</div>
    </div>
  
  )
}

export default Form
