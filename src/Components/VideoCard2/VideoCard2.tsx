"use client"
import React, { useEffect, useRef } from 'react';
// import Video from '../../img/loan.mp4';


const VideoCard = () => {

  return (
  <main className='grid grid-cols-2 mt-32'>
    <div className='flex items-start mx-auto sm:max-w-96 max-w-48 text-slate-800'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    </div>
    <div className='flex items-end'>

    <div className='grid grid-cols-2 gap-8' >
      <div className='flex items-center justify-center bg-cardColour w-32 h-32'></div>
      <div className='flex items-center justify-center bg-cardColour w-32 h-32'></div>
      <div className=' bg-cardColour w-32 h-32'></div> 
    </div>
   
    </div>
  
  </main>
  );
};

export default VideoCard;