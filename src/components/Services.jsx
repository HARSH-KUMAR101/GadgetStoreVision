import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";



import ServiceComp from './ServiceComp';

function Services() {
    let icon1=<TbTruckDelivery/>
    let icon2=<RiSecurePaymentLine />
    let data1="Super Fast and Free Delivery"
    let data2="Super Secure Payment System"

  return (
    <div className="max-w-[1320px] mx-auto my-[60px] grid md:grid-rows-2 md:grid-flow-col gap-7">
        <div className="row-span-2  bg-slate-300 hover:bg-slate-200 rounded-xl">
           <ServiceComp icon={icon1} data={data1}/>
        </div>

        <div className="col-span-1 bg-slate-300 hover:bg-slate-200 rounded-xl  flex flex-col items-center   justify-center py-3">
           <FaShieldAlt className='text-3xl text-sky-800 rounded-full p-1 bg-slate-50'/>
           <h3 className='text-xl'>Non-Contact Shipping</h3>
        </div>

        <div className=" col-span-1 bg-slate-300 hover:bg-slate-200 rounded-xl  flex flex-col items-center   justify-center py-3">
           <FaHandHoldingUsd className='text-3xl text-sky-800 rounded-full p-1 bg-slate-50'/>
            <h3 className='text-xl'>Money-Back Guarantee</h3>
        </div>

        <div className="row-span-2 bg-slate-300 hover:bg-slate-200 rounded-xl"> 
           <ServiceComp icon={icon2} data={data2}/>
        </div>

  </div>
  )
}


export default Services