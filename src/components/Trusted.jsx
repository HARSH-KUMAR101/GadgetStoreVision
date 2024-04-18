import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa6";

function Trusted() {
  return (
    <div className='bg-blue'>
       <div className='max-w-[1320px] mx-auto bg-blue py-7 text-center'>
            <h3 className='text-3xl my-10 font-bold'>Trusted By 1000+ Companies</h3>
            <div className='grid md:grid-cols-5 grid-cols-2 md:text-4xl text-2xl text-center text-white gap-3 '>
                   <div className='my-7'>
                       <FaFacebook className='mx-auto md:text-[100px] text-[60px]'/>
                       <h3>Facebook</h3>
                   </div>
                   <div className='my-7'>
                      <SiFlipkart className='mx-auto md:text-[100px] text-[60px]'/>
                      <h3>Flipkart</h3>
                   </div>
                   <div className='my-7'>
                      <FaInstagramSquare className='mx-auto md:text-[100px] text-[60px]'/>
                      <h3>Instagram</h3>
                   </div>
                   <div className='my-7'>
                      <AiFillAmazonCircle className='mx-auto md:text-[100px] text-[60px]'/>
                      <h3>Amazon</h3>
                   </div>
                   <div className='my-7'>
                       <FaGooglePlus className='mx-auto md:text-[100px] text-[60px]'/>
                       <h3>Google</h3>
                   </div>
            </div>
       </div>
    </div>
  )
}

export default Trusted