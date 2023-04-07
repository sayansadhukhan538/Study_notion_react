import React from 'react';
import Testimonials from '../components/Testimonials';
import reviews from '../Data'
import { Typewriter } from 'react-simple-typewriter'

import image from '../assets/never-stop-learning-ga27d8f31f_1280.jpg'
import Bigfeatures from '../components/Home/Bigfeatures';
import logo1 from '../components/Home/asset 28.png'
import logo2 from '../components/Home/asset 29.png'
import logo3 from '../components/Home/asset 30.png'
import logo4 from '../components/Home/asset 31.png'

function Home() {

 
  
  return (
    <div className='bg-richblack-800 relative'>
      <header>
      <div className='flex items-center justify-between gap-[60px] max-w-[1160px] mx-auto overflow-hidden py-[60px]'>
        <div className="max-w-[40vw]">
          <h1 className='mt-[36px] text-blue-300 font-light text-4xl'>Learn confidently 
          <span className='font-thin font-mono text-blue-100 text-5xl'>
          
          <Typewriter
            words={[' Read', ' Learn', ' Sleep', ' Repeat!']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
          </h1>
          <p className="mt-[19px] text-slate-500 font-mono text-lg leading-10">
          Build skills for today, tomorrow and beyond
          Education to future proof your career. Join the millions of learning to code with StudyNotion for free. <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam exercitationem optio non sapiente quis praesentium, accusamus illo.
          </p>
          
        </div>
        <div class="right-header">
          <img className='w-full hero-image' src={image} alt="" />
        </div>
      </div>
    </header>

    <div>
      <Bigfeatures />
    </div>

      <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-richblack-800 -200">
      <div className="text-center">
            <h1 className=" text-slate-500 font-light text-5xl ">Top Reviews</h1>
            <div className="bg-slate-400 h-[4px] w-1/5 mt-6 mb-10 mx-auto"></div>
            <Testimonials className='w-[90vw] md:w-[700px] bg-richblack-200 mt-10 p-10 flex flex-col justify-center items-center transition-all duration-700 hover:shadow-xl rounded-lg' reviews = {reviews} />
        </div>
      </div>
     
<footer class="bg-richblack-700 text-center text-richblack-200 pl-[75px] pt-[23px] pb-[30px]">
  
  <div className='flex justify-evenly items-baseline w-11/12  '>
  <div><img src={logo1} alt="" /> </div>
  <div><img src={logo2} alt="" /> </div>
  
  <div
    className="bg-richblack-700 text-center text-richblack-200 ">
    © 2023 Copyright: StudyNotion
    
  </div>
  <div><img src={logo3} alt="" /> </div>
  <div><img src={logo4} alt="" /> </div>
  
</div>
</footer>
        
    </div>
  )
}

export default Home;