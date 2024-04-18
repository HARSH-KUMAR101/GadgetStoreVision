import React from 'react'
import FormatPrice from './FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useCartContext } from '../context/ContextCart';

function CartItem({id,color,name,price,image,amount}) {
   const {deleteItem,setincrement,setdecrement}=useCartContext() 

 
  return (

    <div className='grid grid-cols-4 md:grid-cols-5 my-2 border-b-2 pb-2'> 
            <div className='flex justify-around'>
                <img className='w-5/12' src={image} alt={id} />
                 <div className='text-sm md:text-xl'>
                    <p >{name}</p>
                    <p>color : <span style={{backgroundColor:color}}  className='rounded-full px-2'></span></p>
                 </div>
            </div>
            <div className='hidden md:block'>
                <FormatPrice price={price}/>
            </div>
            <div className='flex justify-center text-center'>
            <CartAmountToggle 
             
                  amount= {amount}
                  setincrease = {()=>setincrement(id)}
                  setdecrease = {()=>setdecrement(id)}
               />
            </div>
            <div>
               <FormatPrice price={price*amount}/>
            </div>
            <div >
               <RiDeleteBin6Fill className='mx-auto text-xl text-red-500 cursor-pointer' onClick={()=>deleteItem(id)} />
            </div>
    </div>
  )
}

export default CartItem