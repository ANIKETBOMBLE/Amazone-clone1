import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
	 <h1 className="font-bold text-3xl min-h-screen flex items-center justify-center text-blue-500 ">
      Nothing to show here*. Go to   <span className='p-2'>
          <Link to="/" className=''>Home</Link>
      </span>
    
    </h1>
  )
}

export default NotFound