import React from 'react'
import myImage from "./images/SubscribeNowimg.jpg";

const SubscribeNowAdd = () => {
  return (
        <div className="flex items-center justify-center">
          <div className='w-5/6 h-36 mt-10 rounded flex items-center justify-between ' style={{backgroundColor:"#FCE9D2"}} >
          <div className='flex flex-row'>
          <h1 className=' ml-20 text-4xl font-bold text-sky-800'>Subscribe For Regular Alerts</h1>
          <button className='w-62 h-16 ml-7 bg-amber-500 rounded text-xl font-bold text-white'>Subscribe Now</button>
          </div>
          <img src={myImage} alt="" className=' size-fit' />
          </div>
        </div>
  )
}

export default SubscribeNowAdd
