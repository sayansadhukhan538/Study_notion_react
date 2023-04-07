import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
// import { toast } from 'react-toastify';
import { toast } from 'react-hot-toast';

function DasCard({course, likedCourse, setLikedCourse}) {
    function buttonHandler(){

        if(likedCourse.includes(course.id)){
            setLikedCourse((prev)=>prev.filter((currentId)=>currentId!==course.id));
            toast.error("Removed from favourites!");
        }

        else{
            if(likedCourse.length === 0){
                setLikedCourse([course.id]);
            }
            else{
                setLikedCourse((prev)=> [...prev, course.id]);
            }
            toast.success("Added to favourites");
        }
    }
  return (
    <div className='w-[300px] bg-richblack-700 rounded-md overflow-hidden'>
    <div className='relative'>
        <img src={course.image.url} alt={course.image.alt} />

        <div className='w-[36px] h-[36px] bg-richblack-25 rounded-full absolute right-2 bottom-[-15px] flex items-center justify-center'>
            <button onClick={buttonHandler} >
                {
                    likedCourse.includes(course.id) ? 
                    (< FcLike fontSize='1.75rem'/>) :
                    (< FcLikePlaceholder fontSize='1.75rem'/>)
                }
            </button>
        </div>
    </div>
    <div className='p-4'>
        <p className='text-richblack-25 font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-richblack-25'>{course.description.length>100 ? (course.description.substr(0, 100)) + "..." : (course.description)} </p>
    </div>
    
</div>
  )
}

export default DasCard