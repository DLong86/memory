import React, { useState, useEffect, useRef } from 'react';

const hobbies = [
  {question: "List three hobbies you enjoy to do at home."},
  {question: "What is your favourite thing to do?"},
  {question: "Ask the person next to you what their hobbies are."}
]

const Cards = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [text, setText] = useState("Hobbies")
  const timeoutIdRef = useRef(null);
  const elapsedTimeRef = useRef(0);

  const handleText = (e) => {
    const item = hobbies[Math.floor(Math.random() * hobbies.length)].question;
    text === "Hobbies" ? setText(item) : setText("Hobbies")
}

  const startHoverLoop = () => {
    setHoverIndex(null); // Reset hover index
    elapsedTimeRef.current = 0;

    const handleHoverEffect = () => {
      elapsedTimeRef.current += 200; // Increment elapsed time by 200
      const shouldStop = elapsedTimeRef.current >= 3000;

      if (shouldStop) {
        stopHoverLoop();
      } else {
        const newHoverIndex = Math.floor(Math.random() * 13);
        setHoverIndex(newHoverIndex);
      }
    };

    stopHoverLoop(); // Clear any existing hover loop
    timeoutIdRef.current = setInterval(handleHoverEffect, 200); // Start new hover loop
    setText("Hobbies")
  };

  const stopHoverLoop = () => {
    if (timeoutIdRef.current) {
      clearInterval(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopHoverLoop(); // Clean up the hover loop on component unmount
    };
  }, []);

  return (
    <div className="">
      <button className='text-white flex justify-center items-center mx-auto rounded-md my-5 mt-20 py-2 px-20 w-20 bg-[#e936a7]' onClick={startHoverLoop}>Start</button>
      <div className='grid grid-cols-3 grid-rows-4 gap-6 py-4 px-4 sm:gap-8 sm:py-10 sm:px-10 text-white w-[95%] sm:w-3/4 mx-auto h-screen  bg-gray-600 font-bold text-xl uppercase'>
          <div className={`bg-blue-600 rounded-md flex items-center justify-center px-4 cursor-pointer duration-100 ${hoverIndex === 1 ? 'bg-black/50' : ''}`} onClick={handleText}>{text}</div>
          <div className={`bg-pink-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 2 ? 'bg-black/50' : ''}`}>Sports</div>
          <div className={`bg-yellow-400 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 3 ? 'bg-black/50' : ''}`}>Travel</div>
          <div className={`bg-green-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 4 ? 'bg-black/50' : ''}`}>Health</div>
          <div className={`bg-blue-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 5 ? 'bg-black/50' : ''}`}>Hobbies</div>
          <div className={`bg-purple-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 6 ? 'bg-black/50' : ''}`}>Life</div>
          <div className={`bg-rose-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 7 ? 'bg-black/50' : ''}`}>General</div>
          <div className={`bg-yellow-400 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 8 ? 'bg-black/50' : ''}`}>Travel</div>
          <div className={`bg-pink-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 9 ? 'bg-black/50' : ''}`}>Sports</div>
          <div className={`bg-purple-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 10 ? 'bg-black/50' : ''}`}>Life</div>
          <div className={`bg-green-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 11 ? 'bg-black/50' : ''}`}>Health</div>
          <div className={`bg-rose-600 rounded-md flex items-center justify-center cursor-pointer duration-100 ${hoverIndex === 12 ? 'bg-black/50' : ''}`}>General</div>
      </div>
    </div>
  )
}

export default Cards