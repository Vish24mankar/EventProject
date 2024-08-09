import React, { useState } from 'react'
import LogonSignupImage from '../assest/signin.gif';
import { GoEye } from "react-icons/go";
import { BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
function SignUp() {
  const [showPassword, setshowPassword] = useState(false)
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false)
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

  const handleShowConfirmedPassword = () => {
    setShowConfirmedPassword(preve => !preve)
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
    e.preevntDefault();
    const {firstName,userEmail,userPassword,confirmedPassword} =data
  }
  return (
    <div className='p-3 md:p-4 bg-slate-300'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/* <h2 className='text-center text-2xl font-bold'>Sign Up Page</h2> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
          <img src={LogonSignupImage} className='w-full' />
        </div>
        <form className='w-full py-3 flex flex-col'>
          <label htmlFor='firstName'>First name</label>
          <input type='text' id='firstName' name='firstName' value={data.firstName} onChange={handleonChange} className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' required/>

          <label htmlFor='lastName'>Last name</label>
          <input type='text' id='lastName' name='lastName' value={data.lastName} onChange={handleonChange} className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' required/>

          <label htmlFor='userEmail'>Email</label>
          <input type='text' id='userEmail' name='userEmail' value={data.userEmail} onChange={handleonChange} className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' required/>

          <label htmlFor='userPassword'>Password</label>
          <div className='flex bg-slate-200 mt-2 mb-2 px-2 py-1 rounded outline focus-within:outline-blue-300'>
            <input type={showPassword ? 'text' : 'password'} id='userPassword' name='userPassword' value={data.userPassword} onChange={handleonChange} className='w-full bg-slate-200 border-none outline-none' required/>
            <span className='flex text-xl' onClick={handleShowPassword}>{showPassword ? <GoEye /> : <BiHide />}</span>
          </div>

          <label htmlFor='confirmedPassword'>Confirmed Password</label>
          <div className='flex bg-slate-200 mt-2 mb-2 px-2 py-1 rounded outline focus-within:outline-blue-300'>
            <input type={showConfirmedPassword ? 'text' : 'password'} id='confirmedPassword' name='confirmedPassword' value={data.confirmedPassword} onChange={handleonChange} className='w-full bg-slate-200 border-none outline-none' required/>
            <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmedPassword}>{showConfirmedPassword ? <GoEye /> : <BiHide />}</span>
          </div>

          <button type='submit' className='max-w-[150px] m-auto p-2 bg-red-600 cursor-pointer text-white rounded-full mt-4'>Sign up</button>
        </form>

        <p>Already have an account? <Link to="login" className="underline text-red-600">Login</Link></p>
      </div>
    </div>
  )
}

export default SignUp 