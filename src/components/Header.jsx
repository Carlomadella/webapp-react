import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar bg-danger mb-4'>
      <div className="container-fluid">
        <Link className='navbar-brand' to="/">
            <h1 className=''>Boollywood</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Header
