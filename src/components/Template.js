import React from 'react'
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle } from 'react-icons/fc';
import {GrApple} from 'react-icons/gr';

function Template({title, desc1, desc2, image, formtype, setIslogin,}) {
    
  return (
    <div className='flex w-11/12 max-w-[1160px] pt-10 mx-auto gap-x-6 justify-between'>

        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-25 font-semibold text-[2rem] leading-none mb-4'>{title}</h1>

            <p className='text-[1.15rem] leading-[1.8rem]'>
                <span className='text-richblack-100 '>{desc1}</span>
                <br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === 'signup'? (<SignupForm setIslogin={setIslogin}/>) : (<LoginForm setIslogin={setIslogin}/>)}
            
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-200'></div>
                <p className='text-richblack-200'>or</p>
                <div className='w-full h-[1px] bg-richblack-200'></div>
            </div>

            <div className=''>
            <button onClick={LoginForm.submitHandler}
            className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-200 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle />
                <p>{formtype === 'signup'?(<span>Sign up</span>):(<span>Sign in</span>)} with Google Account</p></button>
            <br />
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-200 px-[12px] py-[8px] gap-x-2'>
                <GrApple/>
                <p>{formtype === 'signup'?(<span>Sign up</span>):(<span>Sign in</span>)} with Apple ID</p></button>
                </div>
        </div>

        <div
        className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage} alt="frame-image" className='under-image' width={558} height={504} loading='lazy' />
            <img src={image} alt="frame-image"  width={558} height={490} loading='lazy'
            className='absolute top-6 right-5 upper-image' />
        </div>

    </div>
  )
}

export default Template