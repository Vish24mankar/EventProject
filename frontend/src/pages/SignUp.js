import React, { useState } from 'react'
import LogonSignupImage from '../assest/signin.gif';
import { GoEye } from "react-icons/go";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate} from 'react-router-dom';
import { ImagetoBase64 } from '../utility/ImagetoBase64';
function SignUp() {
  const Navigate = useNavigate()
  const [showPassword, setshowPassword] = useState(false)
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    confirmedPassword: "",
    image : ""
  })
  console.log(data);
  const handleShowPassword = () => {
    setshowPassword(preve => !preve)
  }

  const handleShowConfirmedPassword = () => {
    setShowConfirmedPassword(preve => !preve)
  }

  const handleUploadImage = async(e) => {
    const data = await ImagetoBase64(e.target.files[0])
    console.log(data);

    setData((preve) => {
      return{
        ...preve,
        image : data
      }
    })

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
    const {firstName,userEmail,userPassword,confirmedPassword} = data
    if(firstName && userEmail && userPassword && confirmedPassword){
      if( userPassword === confirmedPassword){
        alert("successfully login!!!")
        Navigate("/login");
      }
      else{
        alert("password and confirm password is not equal")
      }
    }
    else{
      alert("Please enter required fields...")
    }
  }
  return (
    <div className='p-3 md:p-4 bg-slate-300'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/* <h2 className='text-center text-2xl font-bold'>Sign Up Page</h2> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative'>
          <img src={data.image ? data.image : LogonSignupImage} className='w-full' />
          <label htmlFor='profileImage'>
              <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-20 w-full text-center cursor-pointer'>
                  <p className='text-sm p-1 text-white'>upload</p>
              </div>
            <input type='file' id='profileImage' accept='image/""' className='hidden' onChange={handleUploadImage} />
          </label>
        </div>
        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First name</label>
          <input type='text' 
          id='firstName' 
          name='firstName' 
          value={data.firstName} 
          onChange={handleonChange} 
          className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' required/>

          <label htmlFor='lastName'>Last name</label>
          <input type='text' 
          id='lastName' 
          name='lastName' 
          value={data.lastName} 
          onChange={handleonChange} 
          className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' required/>

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

          <label htmlFor='confirmedPassword'>Confirmed Password</label>
          <div className='flex bg-slate-200 mt-2 mb-2 px-2 py-1 rounded outline focus-within:outline-blue-300'>
          <input type={showConfirmedPassword ? 'text' : 'password'} 
          id='confirmedPassword' 
          name='confirmedPassword' 
          value={data.confirmedPassword} 
          onChange={handleonChange} 
          className='w-full bg-slate-200 border-none outline-none' required/>
          <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmedPassword}>{showConfirmedPassword ? <GoEye /> : <BiHide />}</span>
          </div>

          <button type='submit' className='max-w-[150px] m-auto p-2 bg-red-600 cursor-pointer text-white rounded-full mt-4'>Sign up</button>
        </form>

        <p>Already have an account? <Link to={"/login"} className="underline text-red-600">Login</Link></p>
      </div>
    </div>
  )
}

export default SignUp 