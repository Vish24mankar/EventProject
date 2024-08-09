import React, { useState } from 'react'
import LogonSignupImage from '../assest/signin.gif';
import { GoEye } from "react-icons/go";
import { BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Login = () => {
  const [showPassword, setshowPassword] = useState(false)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    confirmedPassword: "",
  })
  console.log(data);
  const handleShowPassword = () => {
    setshowPassword(preve => !preve)
  }

  const handleonChange = (e) => {
    const{name,value} = e.target
    setData((preve) => {
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {userEmail,userPassword} = data
      if( userEmail && userPassword){
        alert("successfully login!!!")
      }
    else{
        alert("Please enter required fields...")
    }
  }

  return (
    <div className='p-3 md:p-4 bg-slate-300'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/* <h2 className='text-center text-2xl font-bold'>Sign Up Page</h2> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
          <img src={LogonSignupImage} className='w-full' />
        </div>
        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
      
          <label htmlFor='userEmail'>Email</label>
          <input type='text' 
          id='userEmail' 
          name='userEmail' 
          value={data.userEmail} 
          onChange={handleonChange} 
          className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' required/>

          <label htmlFor='userPassword'>Password</label>
          <div className='flex bg-slate-200 mt-2 mb-2 px-2 py-1 rounded outline focus-within:outline-blue-300'>
          <input type={showPassword ? 'text' : 'password'} 
          id='userPassword' 
          name='userPassword' 
          value={data.userPassword} 
          onChange={handleonChange} 
          className='w-full bg-slate-200 border-none outline-none' required/>
          <span className='flex text-xl' onClick={handleShowPassword}>{showPassword ? <GoEye /> : <BiHide />}</span>
          </div>

          <button type='submit' className='max-w-[150px] m-auto p-2 bg-red-600 cursor-pointer text-white rounded-full mt-4'>Login</button>
        </form>

        <p>Don't have an account? <Link to={"/signup"} className="underline text-red-600">sign_up</Link></p>
      </div>
    </div>
  )
}

export default Login