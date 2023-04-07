import React from 'react'

function DasFilter({filterData, category, setCategory}) {
    
    function filterHandler(title){
        setCategory(title);}

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-x-4 gap-y-4 mx-auto py-4 justify-center text-richblack-100'>
        {filterData.map((data)=>
            <button className={`bg-richblack-700 text-richblack-200 py-[8px] px-[19px] rounded-[8px] border border-richblack-100 transition-all duration-500 ${category===data.title ? "bg-richblack-25 border-richblack-900 text-richblack-200":""}`} 
            key={data.id} onClick={()=> filterHandler(data.title)} >
                {data.title}
            </button>
        )}
    </div>
  )
}

export default DasFilter