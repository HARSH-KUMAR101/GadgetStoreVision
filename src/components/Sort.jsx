import React from 'react'
import { FaFilter } from "react-icons/fa";
import { BsGridFill,BsList } from "react-icons/bs";
import { useFilterContext } from '../context/ContextFilter';
 
 

function Sort() {
  
  const {isLoading,filterProducts,setGridView,setListView,sorting,deviceView,deviceViewToggle} =  useFilterContext()
  
  
     return (
      
       <div className='grid grid-cols-3 py-5'>
             <div className='text-3xl'>
                 <button className='mx-3' onClick={setGridView}><BsGridFill /></button>
                 <button className='mx-3' onClick={setListView}><BsList /></button>
                 <button onClick={deviceViewToggle} className='mx-3 md:hidden'><FaFilter /></button>
             </div>
             
             <div >{filterProducts.length} products available</div>
             <div> 
   
                  <select  className='border-2' name="sort" id="sort" onChange={sorting}>
                    <option value="#">filter</option>
                    <option value="lowest">Price(Lowest)</option>
                    <option value="highest">Price(Highest)</option>
                    <option value="a-z">a - z</option>
                    <option value="z-a">z - a</option>
                  </select>
             
             </div>
       </div>
     )
  
}



export default Sort