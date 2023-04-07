import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';

function Navbar(props) {
    let isLogin = props.isLogin;
    let setIslogin = props.setIslogin;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-3 mx-auto'>
        <Link to='/'>
            <img src={Logo} alt="Logo" width={160} height={32} loading='lazy'/>
        </Link>
        <nav>
            <ul className='text-white flex gap-x-6'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-4'>
            {!isLogin &&
                <Link to='/login'>
                <button className='bg-richblack-700 text-richblack-200 py-[8px] px-[19px] rounded-[8px] border border-richblack-100 '>Sign in</button>
            </Link>}

            {!isLogin &&
                <Link to='/signup'>
                <button className='bg-richblack-700 text-richblack-200 py-[8px] px-[19px] rounded-[8px] border border-richblack-100 '>Sign up</button>
            </Link>}

            {isLogin &&
                <Link to='/'>
                <button className='bg-richblack-700 text-richblack-200 py-[8px] px-[19px] rounded-[8px] border border-richblack-100 'onClick={()=>{
                    setIslogin(false);
                    toast.success("Logged Out");
                }}>Sign Out</button>
            </Link>}

            {isLogin &&
                <Link to='/dashboard'>
                <button className='bg-richblack-700 text-richblack-200 py-[8px] px-[19px] rounded-[8px] border border-richblack-100 '>Dashboard</button>
            </Link>}
        </div>
    </div>
  )
}

export default Navbar;