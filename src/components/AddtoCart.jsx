import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import CartAmountToggle from './CartAmountToggle';
import { Link } from 'react-router-dom';
import Button from './Button'
import { useCartContext } from '../context/ContextCart';


function AddtoCart({product}) {
    const {addtoCart}=useCartContext()
   
    let {id,colors,stock}=product 
    let [color,setcolor]=useState(colors[0])

    let [amount,setamount] = useState(1)

   const setincrease=()=>{
      amount < stock ? setamount(amount+1) : setamount(stock)
   } 
   const setdecrease=()=>{
      amount >  1  ? setamount(amount-1) : setamount(1)
   }    

  return (
    <>
         <div className='mt-2'>
             <p>colors : 
               {colors.map((curcolor,index)=>{
                 return (
                  
                     <button key={index} onClick={()=>setcolor(curcolor)} className="cursor-pointer p-3 mx-2 rounded-full" style={{backgroundColor:curcolor}}>   
                     {color === curcolor ? <FaCheck className='text-white'/> : "" }  
                     </button>
                 )
               })}
             </p>
         </div>
         <div>
               <CartAmountToggle
                  amount= {amount}
                  setincrease = {setincrease}
                  setdecrease = {setdecrease}
               />
            <Link to="/cart" onClick={()=>addtoCart(id,amount,color,product)}>
                <Button>Add to Cart</Button>
           </Link>
         </div>
    </> 
  )
}

export default AddtoCart