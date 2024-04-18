import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from './FormatPrice'
import { FaTruckFast } from "react-icons/fa6";
import { TbReplace } from "react-icons/tb";
import { FaShieldAlt } from "react-icons/fa";
import MyImage from './MyImage';
import AddtoCart from './AddtoCart';




function PageNavigation({data}) {
  let {id:alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  }=data

//  console.log(data)
  return (
    <>
    <div className='text-2xl font-medium bg-slate-100 p-5'>
        <Link to="/" className='text-sky-800'>Home </Link>/ <span>{name}</span>
    </div>
    <div className='max-w-[1320px] mx-auto grid md:grid-cols-2 my-16 '>
      {/* image-section */}
        <div>
            <MyImage imgs={image}/>
        </div>

        {/* image-data section */}

        <div className='p-8 ' >
              <h2 className='text-3xl'>{name}</h2>
              <div className='text-l my-3'>
                  <p>{stars}</p>
                  <p>{reviews} customer reviews</p>
              </div>
              <div className='my-3'>
                MRP : 
                 <del> <FormatPrice price={price + 2000000 }/></del>
                 <p className='text-sky-800 my-2 font-medium'>Deal Of The Day <FormatPrice price={price}/></p>
              </div>
              <p className='text-slate-700 '>{description}</p>
              <div className='grid grid-cols-3 gap-2  my-5 border-b-neutral-700 border-b-2 py-2 '>
                   <div>
                     <FaTruckFast />
                     <p>Free Delivery</p>
                   </div>
                   <div>
                      <TbReplace />
                      <p>30 Days Replacement</p>
                   </div>
                   <div>
                      <FaShieldAlt />
                      <p>2 years warranty</p>
                   </div>
              </div>

              <div className='my-3'>
                 <p>Stock :
                  <span className='font-medium '> {stock > 0 ? "In Stock" : "not available"}</span></p>
                  <p >Brand : <span className='font-medium '>{company}</span></p>
              </div>

              <div className='border-t-2 '>
                {
                  stock > 0 && <AddtoCart product={data}/>
                }
              </div>
        </div>

    </div>
    </>
  )
}

export default PageNavigation