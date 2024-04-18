import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from './FormatPrice';

function Item({value}) {
   
    const {id,image,name,price,category}=value;
  return (
        <Link to={`/singleProduct/${id}`} >
           <div className='shadow-2xl my-5 rounded overflow-hidden opacity-100 hover:opacity-80 duration-100 p-4'>
            
                 <figure >
                    <img className='rounded-lg' src={image} alt="tech" />
                   
                 </figure>
                
               <div className='md:flex justify-between px-4 py-2 font-medium'>
                  <h3>{name}</h3>
                  <p className='text-blue'><FormatPrice price={price}/></p>
               </div>
           </div>
        </Link>
   
  )
}

 

export default Item