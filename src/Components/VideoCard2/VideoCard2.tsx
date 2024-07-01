"use client"
import React, { useEffect, useRef } from 'react';
import LeftQuote from "../../../public/assets/quote-left.png"
import RightQuote from '../../../public/assets/right-quotation-mark.png'
import Image from 'next/image';
// import Video from '../../img/loan.mp4';


const VideoCard = () => {

  return (
  <main className='grid grid-cols-2 mt-32'>
    <div className='flex items-start mx-auto sm:max-w-96 max-w-48 text-slate-800'>
    <Image src={LeftQuote} alt="Left Quote" height={20} width={20}/>
    <p className='text-sm sm:text-2xl '> Helping you find the best insurance and loan deals quickly and easily, so you can save time and money. <Image src={RightQuote} alt="Left Quote" height={20} width={20}/></p>
   
    </div>
    <div className='flex items-end'>

    <div className='grid grid-cols-2 sm:gap-8 gap-2' >
      <div className='flex items-center justify-center bg-cardColour sm:w-32 sm:h-32 w-8 h-8'></div>
      <div className='flex items-center justify-center bg-cardColour sm:w-32 sm:h-32 w-8 h-8'></div>
      <div className=' bg-cardColour sm:w-32 sm:h-32 w-8 h-8'></div> 
    </div>
   
    </div>
  
  </main>
  );
};

export default VideoCard;