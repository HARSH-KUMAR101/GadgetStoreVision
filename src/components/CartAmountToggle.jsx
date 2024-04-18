import React from 'react'
 
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";



function CartAmountToggle({amount,setincrease,setdecrease}) {
  return (
    
        <div className='text-xl flex gap-1 md:gap-2 w-30s'>
            <span onClick={()=>setincrease()}   ><CiSquarePlus />
                </span>   
            <span className='text-sm'><p>{amount}</p></span>
            <span onClick={ ()=>{setdecrease()}} ><CiSquareMinus />

                </span>
        </div>
 
  )
}

export default CartAmountToggle