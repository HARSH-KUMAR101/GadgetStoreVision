import React from 'react'

function Button({children}) {
  return (
    <button className=' p-3 bg-blue text-white rounded text-center text-l my-2 hover:bg-black duration-100' >
         {children} 
    </button>
  )
}

export default Button