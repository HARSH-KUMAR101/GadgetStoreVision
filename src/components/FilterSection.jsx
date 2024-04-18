import React, { useState } from 'react'
import { useFilterContext } from '../context/ContextFilter'
 
import Button from './Button'
import { MdOutlineClose } from "react-icons/md";
 


function FilterSection() {

   const {products,updateFilterValue,clearFilter,deviceView,deviceViewToggle}=useFilterContext()
  
 

   const getUniqueData=(data,property)=>{
     let newVal= data.map((currElm)=>{
          return currElm[property]
     })
    return newVal = ["all",...new Set(newVal)]
   
   }

   const categoryOnlyData = getUniqueData(products,"category")
   const companyOnlyData = getUniqueData(products,"company")
 
     return (
   
      <div>
           {/* for small device */}
         <div className={`md:hidden block  ${deviceView?"":'hidden'} w-full px-2`}>
   
            <div className='flex justify-between items-center'>
               <h3 className='text-4xl text-center my-1'>Category</h3>
               <MdOutlineClose onClick={deviceViewToggle} className='text-3xl ' />
            </div>
            <div className='my-5'>
              { categoryOnlyData.map((value,index)=>{
                 return (
                    <button className='text-3xl py-2 bg-slate-400 my-2 border-2 rounded-xl px-1' key={index} value={value} name='category' onClick={updateFilterValue}>{value}</button>
                 )
               })}
            </div>
               <div className='text-center'> 
                  <span onClick={clearFilter} >
                     <Button>clear filters</Button>
                  </span>
               </div>
         </div>

        <div className='hidden md:block'>
          <h3 className='text-4xl text-center my-1'>Category</h3>
            <div className='my-5'>
              { categoryOnlyData.map((value,index)=>{
                 return (
                    <button className='w-full text-2xl py-2 bg-slate-400 my-2 border-2' key={index} value={value} name='category' onClick={updateFilterValue}>{value}</button>
                 )
               })}
            </div>
        </div>
        <div className='hidden md:block'>
             <h3 className='text-4xl text-center'>Company</h3>
             <div className='text-center mt-2 text-2xl' >
                <select className='px-10 border-4' name="company" id="company"onChange={updateFilterValue}>
                   {companyOnlyData.map((value,index)=>{
          
                        return (
                          <option  key={index} value={value}>{value}</option>
                        )
                   })
                   }
                </select>
             </div>
        </div>
         <div className={`hidden md:block text-center`}> 
            <span onClick={clearFilter}>
               <Button>clear filters</Button>
            </span>
         </div>
    
      </div>
 
      )  
}

export default FilterSection