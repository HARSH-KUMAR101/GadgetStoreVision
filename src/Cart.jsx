import React from 'react'
import { useCartContext } from './context/ContextCart'
import CartItem from './components/CartItem'
import Button from './components/Button'
import { Link } from 'react-router-dom'
import FormatPrice from './components/FormatPrice'

function Cart() {
  const {cart,clearCart,total_price,shipping_fee}=useCartContext()

  if(cart.length===0){
    return  <div className='text-center my-11'>
          <p className='text-3xl my-3'>NO ITEM IN CART</p>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
    </div>
  }
  return (
    <>
    <div className='max-w-[1320px] mx-auto text-center'>
        <div className='  grid grid-cols-4 md:grid-cols-5 border-b-2 my-4 py-3'>
            <div>item</div>
            <div className='hidden md:block'>price</div>
            <div>quantity</div>
            <div>subtotal</div>
            <div>remove</div>
        </div>
         <div className='border-b-2 py-2'>
            {
              cart.map((currElm)=>{
                 return <CartItem key={currElm.id} {...currElm}/>
              })
            }
          </div>  

          <div className='flex justify-between px-2'>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
            <button onClick={clearCart} className='bg-red-400 rounded my-2 px-2'>Clear Cart</button>
          </div>  
           
           <div className='flex md:justify-end justify-center'>

             <div className='w-[250px] flex flex-col shadow-xl p-5 bg-slate-100 font-medium '>
                 <div className='grid grid-cols-2 gap-10'>
                      <div className='text-start'>
                        <p>Subtotal</p>
                      </div>
                      <div className='text-end'>
                         <FormatPrice price={total_price}/>
                      </div>
                 </div>
                 <div className='grid grid-cols-2'>
                      <div className='text-start'>Shipping fee</div>
                      <div className='text-end'>
                        <p><FormatPrice price={shipping_fee}/></p>
                      </div>
                 </div>
                 <div className='grid grid-cols-2 border-t-2 my-2'>
                      <div className='text-start'>
                        <p>Order Total</p>
                      </div>
                      <div className='text-end'>
                        <p><FormatPrice price={total_price + shipping_fee}/></p>
                      </div>
                 </div>

             </div>
           </div>

    </div>
  
   </>
  )
}

export default Cart