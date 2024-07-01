"use client"
import React from 'react';
// import Video from "../../../src/"



const VideoCard = () => {
 

  return (
  <main className='grid sm:grid-cols-3  grid-cols-1 gap-8 place-items-center mx-auto h-full w-full my-10'>
    <div className='w-60 h-60 rounded-2xl flex items-center justify-center bg-cardColour'>
      <h4 className='text-white text-wrap text-center text-2xl'> This is card 1 and description</h4>
    </div>
    <div className='w-60 h-60 rounded-2xl bg-cardColour flex items-center justify-center'>
    <h4 className='text-white text-wrap text-center text-2xl'> This is card 2 and description</h4>
    </div>
    <div className='w-60 h-60 rounded-2xl bg-cardColour flex items-center justify-center'>
    <h4 className='text-white text-wrap text-center text-2xl'> This is card 3 and description</h4>
    </div>
  </main>

  );
};

export default VideoCard;