import React from 'react'

 const Footer = () => {
  return (

    <div>
    <div className="footer flex justify-around mx-24 ">
        <div className="logo text-4xl font-bold">
            <span>Hostel Form</span>
        </div>
        <div className="footeritems flex m-2">
            <ul className='flex justify-around gap-24 '><li className='flex flex-col gap-3 '>
                <h3 className='text-xl font-bold text font-sans'>Institute Details</h3>
                <span className='text-sm font-normal'>Hostel Name: Kalpana Chawala Girls Hostel</span>
                <span className='text-sm font-normal'>Affiliated: to Samrat Ashok Technological Institute</span>
                <span className='text-sm font-normal'>Address:Civil lines,Campus Road,vidisha,M.P.-464001</span>
            </li>
            <li className='flex flex-col gap-3'>
                <h3 className='text-xl font-bold text font-sans'>Contact Information</h3>
                <span className='text-sm font-normal'>Phone:+91-9568423175</span>
                <span className='text-sm font-normal'>Email:hosteloffice@gmail.com</span>
                <span className='text-sm font-normal'>Office Hours:MON-Fri|10.00 AM-8.00 PM</span>
            </li>
            <li className='flex flex-col gap-3'>
                <h3 className='text-xl font-bold text font-sans'>quick links</h3>
                <span className='text-sm font-medium'> Hostel Rules & Guidelines</span>
                      <span className='text-sm font-normal'>Return to Hostel Policy</span> 
                      <span className='text-sm font-normal'>Leave Application Procedure</span> 
                      <span className='text-sm font-normal'>Warden Contact Directory</span>  
            </li>
            </ul>
        </div>
    </div>
    <div className="termsandcondi">
                <span>© 2025.S.A.T.I. Vidisha. All Rights Reserved.</span>
                <link to=""></link>
            </div>
            </div>
  )
}
 export default Footer