import React from 'react';
import {FaQuoteLeft,FaQuoteRight } from 'react-icons/fa'


function Card(props) {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10]'><img className='aspect-square rounded-full w-[140px] h-[140px] z-[25] ' src={review.image} alt={review.name} />
        <div className='w-[140px] h-[140px] bg-slate-500 absolute top-[6px] left-[10px] z-[-10] rounded-full'></div>
        </div>
        

        <div className='text-center mt-7'>
            <p className='font-semibold font-mono text-3xl capitalize'>{review.name}</p>
        </div>

        <div className='text-center mt-3'>
            <p className='text-richblack-700 uppercase text-lg'>{review.job}</p>
        </div>

        <div className='mx-auto mt-6 text-slate-500'>
        <FaQuoteLeft />
        </div>

        <div className='text-center text-slate-500 mt-4 '>
            <text>{review.text}</text>
        </div>

        <div className='mx-auto mt-5 text-slate-500'>
        <FaQuoteRight />
        </div>

       
    </div>
  )
}

export default Card;