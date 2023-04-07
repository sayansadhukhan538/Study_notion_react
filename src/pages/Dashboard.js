import React from 'react'
import {apiUrl, filterData } from '../DashboardData';
import { useEffect, useState } from 'react';
import DasNavbar from '../components/Dash/DasNavbar';
import DasFilter from '../components/Dash/DasFilter';
import DasSpinner from '../components/Dash/DasSpinner';
import DasCards from '../components/Dash/DasCards';
import { toast } from 'react-toastify';
import logo1 from '../components/Home/asset 28.png'
import logo2 from '../components/Home/asset 29.png'
import logo3 from '../components/Home/asset 30.png'
import logo4 from '../components/Home/asset 31.png'


function Dashboard() {

  const [courses, setCourses] = useState(null);
  const[loading, setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title);

  const fetchData = async ()=>{
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
      
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className="min-h-screen flex flex-col bg-richblack-800">
      <div>
      <DasNavbar />
      </div>

      <div className='bg-richblack-800'>
      <div>
      <DasFilter filterData = {filterData} category = {category} setCategory = {setCategory} />
      </div>

      <div className="w-11/12 max-w-[1160px] mx-auto flex flex-wrap justify-center min-h-[50vh] bg-richblack-800">
        {loading? (<DasSpinner />) : (<DasCards courses={courses} category={category}/>)}
        {/* <Cards courses={courses} category={category}/> */}
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

export default Dashboard;