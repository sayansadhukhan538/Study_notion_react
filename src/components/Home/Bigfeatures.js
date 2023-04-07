import React from 'react'

import Image1 from '../Home/asset 40.png'
import Image2 from '../Home/asset 18.png'
import Image3 from '../Home/asset 24.png'


function Bigfeatures() {
  return (
    <div className=' mt-[60px]'>
        <div className="flex items-center justify-between max-w-[1160px] mx-auto overflow-hidden gap-[30px] ">
        <div className="max-w-[50vw]">
          <img className='w-full' src={Image2} alt="" />
        </div>
        <div className=" flex flex-col items-start">
          <h4 className='font-medium text-3xl text-blue-300'>Effortless validation for</h4>
          <h3 className='font-extralight text-5xl text-blue-100'>Design professionals</h3>
          <br />
          <p className='text-slate-500 font-mono'>
            Test interfaces, interaction flows, iconography and more, to help
            you create intuitive and delightful experiences for your users.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-between max-w-[1160px] mx-auto overflow-hidden gap-[30px] ">
        <div className="max-w-[50vw]">
          <img className='w-full' src={Image1} alt="" />
        </div>
        <div className=" flex flex-col items-start">
          <h4 className='font-medium text-3xl text-blue-300'>Effortless validation for</h4>
          <h3 className='font-extralight text-5xl text-blue-100'>Design professionals</h3>
          <br />
          <p className='text-slate-500 font-mono'>
            Test interfaces, interaction flows, iconography and more, to help
            you create intuitive and delightful experiences for your users.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between max-w-[1160px] mx-auto overflow-hidden gap-[30px] ">
        <div className="max-w-[50vw]">
          <img className='w-full' src={Image3} alt="" />
        </div>
        <div className=" flex flex-col items-start">
          <h4 className='font-medium text-3xl text-blue-300'>Effortless validation for</h4>
          <h3 className='font-extralight text-5xl text-blue-100'>Design professionals</h3>
          <br />
          <p className='text-slate-500 font-mono'>
            Test interfaces, interaction flows, iconography and more, to help
            you create intuitive and delightful experiences for your users.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bigfeatures