import axios from 'axios';
import React, { useEffect, useState } from 'react' 
import Item from './Item';
import { useFilterContext } from '../context/ContextFilter';

function FeatureProducts() {


  const {products} = useFilterContext()

 let newdata = products.filter((value)=>value.featured===true)  
 

return (
   <div className='bg-slate-100'>

    <div className='max-w-[1320px] mx-auto py-8 my-10'>
        <p>check Now!</p>
        <h1 className='text-3xl font-medium'>Our Feature Services</h1>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-3'>
           {
              newdata.map((value,index)=>{
                 return(
                    <Item value={value} key={index}/>
                 )
            })
           }   
        </div>
        </div>
   </div>
      )         
}

export default FeatureProducts