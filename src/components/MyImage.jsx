import React, { useState } from 'react'

function MyImage({imgs}) {
   
  let [data,setdata]=useState(0)
  return (
    <div className='grid grid-cols-2'> 
        <div>
           {
            imgs.map((currElm,index)=>{
              return (
                <div className={index === data ? 'max-w-[150px] mx-auto my-2 border-4 border-black':"max-w-[150px] border-4  mx-auto my-2"} key={index} onClick={()=> setdata(index)} >
                 <figure>
                    <img src={currElm.url} alt={currElm.figurename}/>
                 </figure>
                 
                </div>
              )
            })
           }
        </div>
        <div className='flex items-center'>
          <figure>
              <img src={imgs[data].url }  />
          </figure>
        </div>
    </div>
  )
}

export default MyImage