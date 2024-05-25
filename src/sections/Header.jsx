
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=" bg-light-background text-dark p-4 flex items-center justify-between">
        <div className="flex items-center">
        
        <h1 className="font-bold text-2xl">ARJUN</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-gray-300">Skills</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
