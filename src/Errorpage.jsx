import React from 'react'
import Button from './components/Button'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <div className='max-w-[1320px] mx-auto text-center '>
      <h2 className='text-8xl my-5'>404</h2>
      <h2>UH OH! You're lost</h2>
      <p>The page you are looking for does not exist. How you got herer is a mystery Click the button below to go back to the home page</p>

      <Button><Link to='/'>Go back to Homepage</Link></Button>
    </div>
  )
}

export default Errorpage