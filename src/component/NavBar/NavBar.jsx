import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-5 text-white bg-[#44A194] hover:bg-[#44A194] p-5 transition-colors duration-300">
      <span className=' font-bold text-xl'>SUBINA GURUNG</span>
      <div className='space-x-12  text-xl hover:text-[#ffffff] transition-colors duration-300 '>
        <Link to="/" target="_self" className='hover:border-b-2 border-white'>Home</Link>
         <Link to="/about" target="_self" className='hover:border-b-2 border-white'>About</Link>
         <Link to="/experience" target="_self" className='hover:border-b-2 border-white'>Experience</Link>
         <Link to="/education" target="_self" className='hover:border-b-2 border-white'>Education</Link>
          <Link to="/contact" target="_self" className='hover:border-b-2 border-white'>Contact</Link>
      </div>

      <div >
          <a>
        <button className='btn'>
          Download CV
        </button>
        </a>
      </div>
    </div>
  )
}

export default NavBar;