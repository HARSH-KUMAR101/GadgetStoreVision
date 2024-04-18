
import React from 'react'
import Button from './components/Button'

function Contact() {
  return (
    <>
      <div className='my-12 flex text-center flex-col'>
        <h3 className='text-3xl font-bold py-4'>Contact-Us</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72023123867!2d76.82493630561984!3d28.423160292914293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712155782639!5m2!1sen!2sin" width="100%" height="400" style={{border:0}}   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='max-w-[700px] mx-auto my-7'>
           <form action="" className='flex flex-col gap-5 shadow-2xl p-5 '>
               <input className=' border-2 py-2 px-1 rounded' type="text" name="username"  placeholder='username' required/>
               <input className=' border-2 py-2 px-1 rounded' type="email" name="email"  placeholder='E-mail' required/>
               <textarea className=' border-2 py-2 px-1 rounded' name="message" cols="10" rows="5" placeholder='enter your massage'></textarea>
               
             
                 <Button>Send</Button>  
           </form>
      </div>
    </>
  )
}

export default Contact