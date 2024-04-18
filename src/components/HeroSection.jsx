import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


function HeroSection({title}) {
  return (
    <>
      <section className='max-w-[1320px] px-3 text-center md:text-left mx-auto grid md:grid-cols-2 mt-7 gap-3'>
        <div>
          <p className='text-blue'>Welcome to</p>
          <h1 className='text-5xl font-bold my-3'>{title}</h1>
          <p className='my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde porro culpa molestias eos harum aperiam corrupti necessitatibus, doloremque, quasi perspiciatis, p Sequi minima saepe vero, delectus deserunt illum, ipsum temporibus corporis alias quaerat blanditiis magni quasi odio! Officiis commodi molestiae nisi rem quidem non obcaecati?</p>
           
           <Button><Link to="/products">SHOP NOW</Link></Button>
        </div>
         <figure className='overflow-hidden '>
          <img className='hover:scale-125 duration-300' src="/images/herosecton.jpg" alt="hero-section" />
         </figure>
        <div>
              
        </div>
      </section>
    </>
  )
}

export default HeroSection