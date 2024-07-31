import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-blue-400 text-black'>
      <div className='container mx-auto py-8 px-4 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-8'>
        
      <div className='Product'>
          <h3 className='font-bold text-lg mb-4'>Product</h3>
          <ul className='space-y-2'>
            <li><a href='#' className='hover:underline'>Home</a></li>
            <li><a href='#' className='hover:underline'>Template</a></li>
            <li><a href='#' className='hover:underline'>pricing</a></li>
            <li><a href='#' className='hover:underline'>Event Discover</a></li>
          </ul>
        </div> 

        <div className='Features'>
          <h3 className='font-bold text-lg mb-4'>Features</h3>
          <ul className='space-y-2'>
            <li><a href='#' className='hover:underline'>online event Register</a></li>
            <li><a href='#' className='hover:underline'>promote event online</a></li>
            <li><a href='#' className='hover:underline'></a></li>
            <li><a href='#' className='hover:underline'>Feature 4</a></li>
          </ul>
        </div>

        <div className='event-types'>
          <h3 className='font-bold text-lg mb-4'>Event Types</h3>
          <ul className='space-y-2'>
            <li><a href='#' className='hover:underline'>Weddings</a></li>
            <li><a href='#' className='hover:underline'>Corporate Events</a></li>
            <li><a href='#' className='hover:underline'>Parties</a></li>
            <li><a href='#' className='hover:underline'>Concerts</a></li>
            <li><a href='#' className='hover:underline'>Festival</a></li>
          </ul>
        </div>

        <div className='event-creators'>
          <h3 className='font-bold text-lg mb-4'>Event Creates</h3>
          <ul className='space-y-2'>
            <li><a href='#' className='hover:underline'>About EventCreate</a></li>
            <li><a href='#' className='hover:underline'>Contact Us</a></li>
            <li><a href='#' className='hover:underline'>Customers</a></li>
            <li><a href='#' className='hover:underline'>blogs</a></li>
          </ul>
        </div>

       
      </div>
      
      
        <div className='socialmedia text-center mt-8'>
          <h3 className='font-bold text-lg mb-4'>Follow Us</h3>
          <div className='flex justify-center space-x-4'>
            <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer' className='hover:underline'>
              <i className="fa fa-facebook-f fa-2x"></i>
            </a>
            <a href="https://www.whatsapp.com/" target='_blank' rel='noopener noreferrer' className='hover:underline'>
              <i className="fa fa-whatsapp fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer' className='hover:underline'>
              <i className="fa fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.twitter.com/" target='_blank' rel='noopener noreferrer' className='hover:underline'>
              <i className="fa fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.google.com/" target='_blank' rel='noopener noreferrer' className='hover:underline'>
              <i className="fa fa-google fa-2x"></i>
            </a>
          </div>
        </div>
        
      <div className='bg-gray-800 text-white text-center py-4'>
        <span>&copy; {new Date().getFullYear()} VS EVENT PLANNER. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
