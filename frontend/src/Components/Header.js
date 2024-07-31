import React from 'react'
import ConstaData from '../Shared/ConstaData'
// import { TiSocialFacebook,TiSocialTwitter } from "react-icons/ti";
// import { SlSocialInstagram } from "react-icons/sl";
const Header = () => {
  return (
    <div className='mt-3'>
      <div className='Socialmedia flex justify-between items-center bg-blue-400'>
        <div className='followus text-black pt-1 pb-1 ml-10'>
          <a href="https://www.facebook.com/" target='blank'>
              <i class="fa fa-facebook-f fa3"></i>  
              {/* <TiSocialFacebook /> */}
          </a>  &nbsp;
          <a href="https://www.whatsapp.com/" target='blank'>
              <i class="fa fa-whatsapp fa3"></i>
          </a>  &nbsp;
          <a href="https://www.instagram.com/" target='blank'>
              <i class="fa fa-instagram fa3"></i> 
              {/* <SlSocialInstagram /> */}
          </a>  &nbsp;
          <a href="https://www.twitter.com/" target='blank'>
              <i class="fa fa-twitter fa3"></i>
              {/* <TiSocialTwitter /> */}
          </a>  &nbsp; 
          <a href="https://www.google.com/" target='blank'>
              <i class="fa fa-google fa3"></i>
          </a>  &nbsp; 
          <span className='text-black ml-6'>Mon-Sun 10:00AM - 9:00PM</span>
        </div>
        <div className='contactinfo'>
          {/* , +91 8484854108 */}
          <span className='text-black mr-8'> <i class="fa fa-phone fa3"></i>&nbsp;  +91 9765223448</span> <br/>
           {/* <span><i class="fa fa-email fa3"></i>sveventsplanner@gmail.com</span> &nbsp; */}
          {/* <i class="fa fa-phone fa3" ><span className='text-white'> &nbsp; +91 9765223448</span></i> &nbsp; */}
          {/* <span>sveventsplanner@gmail.com</span> */}
        </div>
      </div>
      <div className='mx-auto flex items-center justify-between bg-gray-100 p-2'>
        <nav className='flex items-center space-x-4 ml-80'>
          <ul className='flex space-x-10 items-center justify-between'>
          <li><a href='' className='text-black'>Home</a></li>
          <li><a href='' className='text-black'>About</a></li>
          <li><a href='' className='text-black'>Gallery</a></li>
          <li><a href='' className='text-black'>Services</a></li>
          <a href=''>
            <img 
              src={ConstaData.LOGO} 
              alt="galleryimg" 
              className='rounded-full w-16 h-16' 
              />
          </a>
          <li><a href='' className='text-black'>Themes</a></li>
          <li><a href='' className='text-black'>Package</a></li>
          <li><a href='' className='text-black'>PartyIdea</a></li>
          <li><a href='' className='text-black'>Contact Us</a></li>
          </ul>
        </nav>
        <button type='button' className='mr-8'>Login</button>
      </div>
    </div>
  )
}

export default Header