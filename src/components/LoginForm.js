import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';


function LoginForm({setIslogin}) {
    const navigate = useNavigate();

    const [formData, setFormdata] = useState({email:'', password:''})
    function buttonHandler(event){
        setFormdata((prev)=>{
          return{
            ...prev,
          [event.target.name]:event.target.value
          }
        })
    
      }
    const[showPassword, setShowPassword] = useState(false);
    
    function submitHandler(event){
        event.preventDefault();
        setIslogin(true);
        toast.success('Logged In');
        navigate('/dashboard');
        console.log('Log in data is here')
        console.log(formData);

    }

  return (
    <div>
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.89rem] text-richblack-25 mb-1 leading-[1.375rem] font-bold'>Email Address <sup className='text-pink-200 '>*</sup></p>
            <input 
            className='bg-richblack-700 rounded-[0.5rem] text-richblack-25 w-full p-[12px]'
            type="email" 
            value={formData.email}
            onChange={buttonHandler}
            required
            placeholder='enter your id'
            name='email'
            />
            </label>

            <label className='w-full relative' >
                <p className='text-[0.9rem] text-richblack-25 mb-1 leading-[1.375rem] font-bold'>Password <sup className='text-pink-200 '> *</sup></p>
            <input 
            className='bg-richblack-700 rounded-[0.5rem] text-richblack-25 w-full p-[12px]'
            type={showPassword?('text'):('password')}
            defaultValue={formData.password}
            onChange={buttonHandler}
            required
            placeholder='enter your password'
            name='passowrd'
            />
            <span className='absolute right-4 top-[39px] cursor-pointer'
            onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEye fontSize={20} fill='#AFB2BF'/>): (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF' />)}
            </span>
            <Link to='#'>
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forget Password</p>
            </Link>
            </label>

            <button className='rounded-[8px] font-medium text-richblack-700 p-[8px] bg-yellow-50'>Sign in</button>

        </form>
        
    </div>
  )
}

export default LoginForm