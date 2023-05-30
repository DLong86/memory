import React, { useState, useEffect, useRef } from 'react';
import useHoverLoop from '../hooks/useHoverLoop';
import hobbies from '../db/hobbies';

const Cards = () => {
  const {hoverIndex, startHoverLoop} = useHoverLoop()

  const [text, setText] = useState("hobbies")

  const handleText = (e) => {
    const item = hobbies[Math.floor(Math.random() * hobbies.length)].question;
    text === e.target.id ? setText(item) : setText(e.target.id)

}

  return (
    <div className="">
      <button className='text-white flex justify-center items-center mx-auto rounded-md my-5 mt-20 py-2 px-20 w-20 bg-[#e936a7]' onClick={startHoverLoop}>Start</button>
      <div className='grid grid-cols-3 grid-rows-4 gap-6 py-4 px-4 sm:gap-8 sm:py-10 sm:px-10 text-white w-[95%] sm:w-3/4 mx-auto h-screen  bg-gray-600 font-bold text-xs md:text-sm lg:text-xl uppercase'>
          <div id='hobbies' className={`bg-blue-600 rounded-md flex items-center justify-center cursor-pointer duration-100 px-2 ${hoverIndex === 0 ? ' bg-slate-950' : ''}`} onClick={handleText}>{text}</div>
          <div className={`bg-pink-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 1 ? 'bg-slate-950' : ''}`}>Sports</div>
          <div className={`bg-yellow-400 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 2 ? 'bg-slate-950' : ''}`}>Travel</div>
          <div className={`bg-green-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 3 ? 'bg-slate-950' : ''}`}>Health</div>
          <div className={`bg-blue-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 4 ? 'bg-slate-950' : ''}`}>Hobbies</div>
          <div className={`bg-purple-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 5 ? 'bg-slate-950' : ''}`}>Life</div>
          <div className={`bg-rose-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 6 ? 'bg-slate-950' : ''}`}>General</div>
          <div className={`bg-yellow-400 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 7 ? 'bg-slate-950' : ''}`}>Travel</div>
          <div className={`bg-pink-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 8 ? 'bg-slate-950' : ''}`}>Sports</div>
          <div className={`bg-purple-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 9 ? 'bg-slate-950' : ''}`}>Life</div>
          <div className={`bg-green-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 10 ? 'bg-slate-950' : ''}`}>Health</div>
          <div className={`bg-rose-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 11 ? 'bg-slate-950' : ''}`}>General</div>
      </div>
    </div>
  )
}

export default Cards