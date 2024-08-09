import React, { useState } from 'react'
import ConstaData from '../Shared/ConstaData';
import { Link } from 'react-router-dom';
import { FaRegHeart,FaUserAlt,FaUserCircle} from "react-icons/fa";
const Header = () => {
  const [showMenu,setShowMenu] = useState(false)
  const handleShowMenu = () =>{
    setShowMenu(preve => !preve)
  }
  return (
    <header className='fixed shadow-md w-full h-22 mb-10 bg-blue-400 px-2 md:px-4'>
      {/* desktop */}
      <div className='flex items-center justify-between h-full'>
            <Link to={""} >
                <div className='h-16'>
                  <a href='#'>
                    <img 
                      src={ConstaData.LOGOO} 
                      alt="galleryimg" 
                      className='rounded-full h-full p-1' 
                      />
                  </a>
                </div>
            </Link>

              <div className='flex items-center gap-4 md:gap-4'>
                  <nav className='flex gap-4 md:gap-6 text-base md:text-lg z-50'>
                    <Link to={""}>Home</Link>
                    <Link to={"about"}>About</Link>
                    <Link to={"gallery"}>Gallery</Link>
                    <Link to={"aervices"}>Services</Link>
                    <Link to={"theme"}>Themes</Link>
                    {/* <Link to={"partyidea"}>PartyIdea</Link> */}
                    <Link to={"contact"}>Contact Us</Link>
                  </nav>
                  <div className='text-2xl text-slate-600 relative'>
                      <FaRegHeart />
                      <div className='absolute -top-0 -right-2 -mt-2 text-white bg-red-500 h-5 w-5 text-base text-center rounded-full'>
                      0</div>
                  </div>
                  <div className='text-slate-600' onClick={handleShowMenu}>
                    {/* border-2 border-solid border-slate-600 p-1 rounded-full */}
                    <div className='text-3xl cursor-pointer'>
                      {/* <FaUserAlt /> */}
                      <FaUserCircle />
                    </div>
                    {showMenu && (<div className='absolute right-1 bg-white py-2 px-2 shadow drop-shadow-md mt-2 cursor-pointer'>
                                      <Link to={"newUser"} className='whitespace-nowrap'>New User</Link>  <br />
                                      <Link to={"login"}  className='whitespace-nowrap'>Login</Link>
                                  </div>
                    )}  
                  </div>
              </div>
          </div>

      {/* mpbile */}
    </header>

  )
}

export default Header