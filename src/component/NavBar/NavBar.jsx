import React from 'react'


const NavBar = () => {
  return (
  <div className="w-full bg-gray-200 shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
    
   
    <span className="text-2xl font-bold tracking-wide text-[#5a855f]">
      SUBINA GURUNG
    </span>

 
  <div className="hidden md:flex space-x-10 text-lg font-medium text-gray-700">
  <a href="#home" className="hover:text-[#5a855f] hover:border-b-2 border-[#5a855f] pb-1 transition-all duration-300">Home</a>
  <a href="#about" className="hover:text-[#5a855f] hover:border-b-2 border-[#5a855f] pb-1 transition-all duration-300">About</a>
  <a href="#skills" className="hover:text-[#5a855f] hover:border-b-2 border-[#5a855f] pb-1 transition-all duration-300">Skills</a>
  <a href="#experience" className="hover:text-[#5a855f] hover:border-b-2 border-[#5a855f] pb-1 transition-all duration-300">Experience</a>
  <a href="#contact" className="hover:text-[#5a855f] hover:border-b-2 border-[#5a855f] pb-1 transition-all duration-300">Contact</a>
</div>

 
    <div>
      <a href="/cv.pdf" download>
        <button className="bg-[#5a855f] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#4a6f4e] hover:shadow-lg transition duration-300">
          Download CV
        </button>
      </a>
    </div>

  </div>
</div>
  )
}

export default NavBar;