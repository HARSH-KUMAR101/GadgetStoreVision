import React, { useState } from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import Productlist from './components/Productlist'
import { useFilterContext } from './context/ContextFilter'
 
 


function Products() {

  const {isLoading,deviceView} =  useFilterContext() 
     
  
  if(isLoading){
    return (

      <p className='text-5xl'>content loading.........</p>
    )
  }

  return (
    <div className='max-w-[1320px] mx-auto md:grid grid-cols-4'>
      {/* filter section */}
       <div className='md:grid bg-slate-200 col-span-1 md:relative  absolute h-screen '>
               <FilterSection/>          
       </div>

         {/* data section */}
        <div className='grid   col-span-3'>
             {/* top filter section */}
                <div>  
                    <Sort />
                </div>
             {/* bottom product section */}
                <div className={`${deviceView? "hidden" : ""}`}>
                  <Productlist/>
                </div>
        </div>

    </div>
  )
}

export default Products