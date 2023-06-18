import DasCard from '../Dash/DasCard'
import React, { useState } from 'react'

function DasCards({courses, category}) {
    const[likedCourse, setLikedCourse] = useState([]);

    let allCourses = [];
    let liked = [];
    function getCourses(){
        if(category==='All'){
            Object.values(courses).forEach((courseCatagory)=>{
                courseCatagory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else if(category==='Liked-Course'){
            Object.values(courses).forEach((courseCatagory)=>{
                courseCatagory.forEach((course)=>{
                    for(let i=0; i<likedCourse.length;i++){
                        if(course.id === likedCourse[i]){
                            liked.push(course)
                        }
                    }
                })
            })
            return liked;
            
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