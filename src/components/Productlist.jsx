import React from 'react'
import { useFilterContext } from '../context/ContextFilter'
import ListView from './ListView'
import GridView from './GridView'

 

function Productlist() {
    const {filterProducts,grid_view} = useFilterContext()
     
  if(grid_view === true){
    return (
          <GridView products={filterProducts}/>
    )
  }
  if(grid_view === false){
    return   <ListView products={filterProducts}/>
  }
 
 
}

export default Productlist