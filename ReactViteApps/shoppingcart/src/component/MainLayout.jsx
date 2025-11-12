import React from 'react'
import {Link} from 'react-router-dom'

function MainLayout() {
  return (
    <div>
     <nav className='flex  text-2xl '>
      <div><Link to = '/login'>Login</Link></div>
      <div><Link to = '/register'>Registration</Link></div>
      <div><Link to = '/dashboard'>Dashboard</Link></div>
     </nav>
    </div>

  )
}

export default MainLayout