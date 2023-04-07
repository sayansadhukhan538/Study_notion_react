import React, { useEffect, useState } from 'react'
import Card from './Card'
import {FaStepBackward, FaStepForward} from 'react-icons/fa';



function Testimonials(props) {
    let reviews = props.reviews;
    const[index, setIndex] = useState(0);
    
   

    useEffect(()=>{
        let slider = setInterval(()=>{
             setIndex((oldIndex)=>{
                let index = oldIndex+1;
                if(index>reviews.length-1){
                    index=0
                }
                return index;
             })
         }, 3456);
         return()=>{
             clearInterval(slider);
         }
     },[index])



    function leftShift(){
        if(index-1 < 0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }

    };
    function rightShift(){
        if(index+1 >= reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    };
    function surpriseHandler(){
       let random = Math.floor(Math.random() * (reviews.length-1));
       setIndex(random);
    };
    

    return (
        <div className='w-[100vw] md:w-[700px] bg-slate-400 mt-10 p-10 flex flex-col justify-center items-center transition-all duration-700 hover:shadow-xl rounded-lg'><Card review = {reviews[index]}/>
    
         <div className='flex justify-center text-3xl gap-3 ext-richblack-700 mt-5'>
            <button onClick={leftShift} className='cursor-pointer text-richblack-700 hover:text-slate-500 '><FaStepBackward /></button>
            <button onClick={rightShift} className='cursor-pointer text-richblack-700 hover:text-slate-500 '><FaStepForward /></button></div>
    
            <div className='pt-6'><button onClick={surpriseHandler} className='bg-richblack-700 hover:bg-slate-500 transition-all duration-200 px-6 py-3 rounded-md text-white font-bold'>Pick Randomly</button></div>
        </div>
      )
    }
    
    export default Testimonials;