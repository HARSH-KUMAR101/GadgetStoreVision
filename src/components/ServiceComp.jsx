import React from 'react'

function ServiceComp({icon,data}) {
  return (
    <div className='flex flex-col items-center h-[160px] justify-center gap-4'>
   
       <div className='text-3xl text-sky-800 rounded-full  p-1 bg-slate-50'>
           {icon}
       </div>
    
    <h3 className='text-xl'>{data}</h3>
   </div>
  )
}

export default ServiceComp