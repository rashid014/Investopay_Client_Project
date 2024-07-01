"use client"
import React from 'react';
// import Video from "../../../src/"



const VideoCard = () => {
 

  return (
  <div className='grid sm:grid-cols-3  grid-cols-1 gap-8 place-items-center mx-auto xl:h-96 h-full w-full my-10 bg-white '>
    <div className='w-60 h-60 rounded-2xl flex items-center justify-center bg-cardColour'>
      <h4 className='text-white text-wrap text-center text-lg'> Find the perfect loan tailored just for you, fast and hassle-free</h4>
    </div>
    <div className='w-60 h-60 rounded-2xl bg-cardColour flex items-center justify-center'>
    <h4 className='text-white text-wrap text-center text-lg'> Protect what matters most with our top-rated insurance options</h4>
    </div>
    <div className='w-60 h-60 rounded-2xl bg-cardColour flex items-center justify-center'>
    <h4 className='text-white text-wrap text-center text-lg'> Get expert financial advice and the best deals, all in one place</h4>
    </div>
  </div>

  );
};

export default VideoCard;