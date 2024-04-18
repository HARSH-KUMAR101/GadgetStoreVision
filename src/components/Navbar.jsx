 import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";


 
 function Navbar() {
  let [toggle,setToggle] = useState(false)
   return (
     <>
        <ul className="hidden md:flex justify-between gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Products</Link></li>
            {/* <li><Link to="/singleProduct:id">SingleProducts</Link></li> */}
            <li><Link to="cart" className='text-2xl'><FiShoppingCart/></Link></li>
        </ul>
        <ul onClick={()=>{setToggle(!toggle)}} className={`duration-300 w-full h-screen md:hidden fixed bg-blue
           ${toggle?'left-[0]':'left-[-100%] '}
            top-[77px]`}>
            <li className='p-3'><Link to="/">Home</Link></li>
            <li className='p-3'><Link to="/about">About</Link></li>
            <li className='p-3'><Link to="/contact">Contact</Link></li>
            <li className='p-3'><Link to="products">Products</Link></li>
            {/* <li className='p-3'><Link to="/singleProduct:id">SingleProducts</Link></li> */}
            <li className='p-3'><Link to="cart" className='text-2xl'><FiShoppingCart /></Link></li>
        </ul>
        {
          toggle?
          <MdOutlineClose onClick={()=>{setToggle(!toggle)}} className='md:hidden text-xl' />
          :
          <AiOutlineMenu  onClick={()=>{setToggle(!toggle)}} className='md:hidden text-xl'/>

        }

     </>
   )
 }

 
 
 export default Navbar