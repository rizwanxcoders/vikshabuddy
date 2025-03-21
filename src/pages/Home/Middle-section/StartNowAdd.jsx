import React from 'react'
import myImage from "./images/startNowimg.jpg";


const StartNowAdd = () => {
  
  return (
    <div className=" flex items-center justify-center"> 
      <div className='w-5/6 h-36 mt-10 rounded flex items-center justify-between ' style={{backgroundColor:"#FCE9D2"}} >
      <div className='flex flex-row'>
      <h1 className=' ml-20 text-4xl font-bold text-sky-800'>Know your chances of Admission</h1>
      <button className='w-62 h-16 ml-7 bg-amber-500 rounded text-xl font-bold text-white'>Start Now</button>
      </div>
      <img src={myImage} alt="" className=' size-fit' />
      </div>
    </div>
  )
}

export default StartNowAdd
