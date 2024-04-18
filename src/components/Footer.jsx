import React from 'react'
import Button from './Button'
import { RiInstagramFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className=''>
         <div className='max-w-[1100px] bg-slate-200 mx-auto rounded-2xl md:relative top-[50px]' >
              <div className='grid grid-cols-2 px-12 py-5 align-middle text-xl'>
                    <div>
                       <h3>Ready to Get Started ?</h3> 
                       <h3>Talk to Us Today</h3>  
                    </div> 
                    <div className='text-end'>
                       <Button><Link to='/contact'>Get Started</Link></Button>
                    </div> 
              </div>
         </div>

              <div  className='bg-slate-600'>
                   <div className='max-w-[1000px] mx-auto bg-slate-600 text-white grid grid-cols-2 gap-2 md:grid-cols-4 pt-14 px-5'>
                         <div>
                            <h3  className='my-3'>Shopping Store</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                         </div>
                         <div>
                             <p className='my-3'>Subscribe to get important updates</p>
                             <Button>Subscribe</Button>
                         </div>
                         <div>
                            <p className='my-3'>Follow Us</p>
                            <div className='flex py-4 gap-3 text-xl '>
                            <RiInstagramFill />
                            <FaAmazon />
                            <SiFlipkart />
                            </div>

                         </div>
                         <div>
                            <p className='my-3'>Call Us</p>
                            <p>8178377101</p>
                         </div>
                   </div>

                   <div className='max-w-[1000px] mx-auto bg-slate-600 text-white grid grid-cols-2 gap-2 border-t-2 p-3'>
                         <div>
                           <p>@{new Date().getFullYear()} Shopping Store. All Right Reserved</p>
                         </div>
                         <div>
                           <p>Privacy Policy</p>
                           <p>Terms and Conditions</p>
                         </div>
                   </div>
              </div>
         

     </div>
  )
}

export default Footer