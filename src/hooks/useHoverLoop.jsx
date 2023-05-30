import { useState, useEffect, useRef } from 'react';

const useHoverLoop = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const timeoutIdRef = useRef(null);
  const elapsedTimeRef = useRef(0);

  console.log("hover Index", hoverIndex);

  const startHoverLoop = () => {
    setHoverIndex(1); // Reset hover index
    elapsedTimeRef.current = 0;

    const handleHoverEffect = () => {
      elapsedTimeRef.current += 200; // Increment elapsed time by 200
      const shouldStop = elapsedTimeRef.current >= 3000;

      if (shouldStop) {
        stopHoverLoop();
      } else {
        const newHoverIndex = Math.floor(Math.random() * 12);
        setHoverIndex(newHoverIndex);
      }
    };

    stopHoverLoop(); // Clear any existing hover loop
    timeoutIdRef.current = setInterval(handleHoverEffect, 200); // Start new hover loop
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

  return {
    hoverIndex,
    startHoverLoop,
  };
};

export default useHoverLoop;
