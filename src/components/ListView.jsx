import React from 'react'
import Button from './Button'
import FormatPrice from './FormatPrice'
import { Link } from 'react-router-dom'

function ListView({products}) {
       
  return (
    products.map((obj,index)=>{
        return (
            <div key={index} className='grid grid-cols-2 gap-2 p-2 border-2 rounded my-1'>
            <div>
               <figure>
                   <img className='object-cover h-48 w-80 mx-auto rounded-lg'  src={obj.image} alt="" />
               </figure>
               
            </div>
            <div>
               <h2 className='text-2xl'>{obj.name}</h2>
               <p className='text-blue text-xl'><FormatPrice price={obj.price}/></p> 
               <p className='text-slate-600 hidden md:block'>{obj.description?.slice(0,99)}</p>
                <Link to={`/singleProduct/${obj.id}`} >
                    <Button>READ MORE</Button>
                </Link>
            </div>
       </div>
        )
    })

  )
}

export default ListView