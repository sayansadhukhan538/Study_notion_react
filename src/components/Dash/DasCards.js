import DasCard from '../Dash/DasCard'
import React, { useState } from 'react'

function DasCards({courses, category}) {
    const[likedCourse, setLikedCourse] = useState([]);

    let allCourses = [];
    function getCourses(){
        if(category==='All'){
            Object.values(courses).forEach((courseCatagory)=>{
                courseCatagory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 bg-richblack-800 '>
        {
            getCourses().map((course)=>{
                return(
                    <DasCard course={course} 
                    likedCourse = {likedCourse}
                    setLikedCourse = {setLikedCourse}
                    />
                );
            })
        }
    </div>
  )
}

export default DasCards