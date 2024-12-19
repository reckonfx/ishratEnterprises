import Link from 'next/link';
import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const footer = () => {
  return (
    <div>
    <div className='w-full max-h-fit p-10 bg-black  text-white flex mt-10 items-center justify-between '>
      <div className='flex items-center justify-center flex-col gap-5'> 
        <h2>Address</h2>
      <h3>Office No. 49-50, Kiran Arcade, Sector 15-A/2, Buffer Zone, <br />
      North Nazimabad Town, Karachi-75850, Pakistan.</h3>
      </div>

      <div className='flex items-center justify-center flex-col gap-5'>
      <h2>Phone</h2>
      <h3>Tel/Fax:( 92-21)36946627</h3>
      </div>

     <div className='flex items-center justify-center flex-col gap-5'>
     <h2>Cell Phone</h2>
     <h3>Cell/ 0333-2122896</h3>
     </div>

      <div className='flex items-center justify-center flex-col gap-5'><h2>Email</h2>
      <h3>ishrat.enterprises@yahoo.com</h3>
        </div>

        <div className='flex items-center justify-center flex-col gap-5'>
        <CiFacebook className='w-10 h-10 text-[#316FF6]  font-bold '/>
        <FaYoutube className='w-10 h-10 text-red-600  font-bold '/>
        <FaTwitter className='w-10 h-10 text-[#E1E8ED]  font-bold '/>
        <FaInstagram className='w-10 h-10 text-white  font-bold '/>


        </div>
        
      
    </div>
    <div className='flex items-end justify-between p-5 text-sm bg-black text-white'>
        <p className='flex items-center justify-center gap-2'>  <FaRegCopyright  className=' text-white '/> Ishrat Enterprises All Rights Reserved</p>
        <p><Link href={"mailto:reckonfx@gmail.com"}>Develpoed by Reckonfx</Link></p>
    </div>
    </div>
    


  )
}

export default footer;
