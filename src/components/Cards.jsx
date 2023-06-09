import React, { useState, useEffect, useRef } from 'react';
import useHoverLoop from '../hooks/useHoverLoop';
import useQuestionText from '../hooks/useQuestionText';

const Cards = () => {
  const {hoverIndex, startHoverLoop} = useHoverLoop()
  const { text, handleHobbies, handleSports, handleTravel, handleGeneral, handleLife, handleHealth } = useQuestionText();

  return (
    <div className="">
      <button className='text-white flex justify-center items-center mx-auto rounded-md my-5 mt-20 py-2 px-20 w-20 bg-[#e936a7]' onClick={startHoverLoop}>Start</button>
      <div className='grid grid-cols-3 grid-rows-4 gap-6 py-4 px-4 sm:gap-8 sm:py-10 sm:px-10 rounded-md text-white w-[95%] sm:w-3/4 mx-auto h-screen  bg-gray-600 font-bold text-xs md:text-sm lg:text-xl capitalize'>
          <div id='hobbies' className={`bg-[#99c5df] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 0 ? ' bg-black' : ''}`} onClick={handleHobbies}>{text["hobbies"]}</div>
          <div id='sports' className={`bg-[#f6b4bf] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 1 ? 'bg-black' : ''}`} onClick={handleSports}>{text["sports"]}</div>
          <div id='travel' className={`bg-[#f8df81] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 2 ? 'bg-black' : ''}`} onClick={handleTravel}>{text["travel"]}</div>
          <div id='health' className={`bg-[#9bd0b7] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 3 ? 'bg-black' : ''}`} onClick={handleHealth}>{text["health"]}</div>
          <div id='hobbies2' className={`bg-[#99c5df] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 4 ? 'bg-black' : ''}`} onClick={handleHobbies}>{text["hobbies2"]}</div>
          <div id='life' className={`bg-[#cc89d6] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 5 ? 'bg-black' : ''}`} onClick={handleLife}>{text["life"]}</div>
          <div id='general' className={`bg-[#f2687b] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 6 ? 'bg-black' : ''}`} onClick={handleGeneral}>{text["general"]}</div>
          <div id='travel2' className={`bg-[#f8df81] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 7 ? 'bg-black' : ''}`} onClick={handleTravel}>{text["travel2"]}</div>
          <div id='sports2' className={`bg-[#f6b4bf] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 8 ? 'bg-black' : ''}`} onClick={handleSports}>{text["sports2"]}</div>
          <div id='life2' className={`bg-[#cc89d6] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 9 ? 'bg-black' : ''}`} onClick={handleLife}>{text["life2"]}</div>
          <div id='health2' className={`bg-[#9bd0b7] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 10 ? 'bg-black' : ''}`} onClick={handleHealth}>{text["health2"]}</div>
          <div id='general2' className={`bg-[#f2687b] rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 11 ? 'bg-black' : ''}`} onClick={handleGeneral}>{text["general2"]}</div>
      </div>
    </div>
  )
}

export default Cards