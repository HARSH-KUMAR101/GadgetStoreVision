 import React from 'react'
import Navbar from './Navbar'
 
 function Header() {
   return (
      <>
       <div className=" bg-blue py-5 text-white "> 
          <div className="max-w-[1320px] mx-auto flex justify-between items-center px-2 ">   
              <h1 className="font-serif text-3xl">SHOPPING</h1>
              <Navbar/>
          </div>
       </div>
      </>
   )
 }
 
 export default Header