import React from 'react'
import Item from './Item'

function GridView({products}) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'> 
    
    {products.map((value,index)=>{
       return (
           <Item value={value} key={index}/>
       )
    })}
  </div>
  )
}

export default GridView