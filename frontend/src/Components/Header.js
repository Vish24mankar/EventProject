import React from 'react'
import ConstaData from '../Shared/ConstaData'

const Header = () => {
  return (
    <div className='mt-3'>
      <div className='container mx-auto flex items-center justify-between bg-pink-200 p-4'>
        <nav className='flex items-center space-x-4'>
          <ul className='flex space-x-4 items-center justify-between'>
          <li><a href='' className='text-black'>Home</a></li>
          <li><a href='' className='text-black'>About</a></li>
          <li><a href='' className='text-black'>Gallery</a></li>
          <li><a href='' className='text-black'>Services</a></li>
          <img 
            src={ConstaData.LOGO} 
            alt="galleryimg" 
            className='rounded-full w-20 h-20' 
            />
          <li><a href='' className='text-black'>Themes</a></li>
          <li><a href='' className='text-black'>Package</a></li>
          <li><a href='' className='text-black'>PartyIdea</a></li>
          <li><a href='' className='text-black'>Contact Us</a></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Header