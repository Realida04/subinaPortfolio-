import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-300'>
        <div className='flex justify-between items-center px-6 py-4'>
            <span> &copy; {new Date().getFullYear()} | All Rights Reserved.</span>
            <p>Made by Realida</p>
        </div>
    </div>
  )
}

export default Footer;