'use client'
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  
  const [screenSize, setScreenSize] = useState({
    width: typeof window === 'undefined'? 0: window.innerWidth,
    height: typeof window === 'undefined'? 0:window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if(typeof window != 'undefined'){
      window.addEventListener('resize', handleResize);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if(typeof window != 'undefined'){
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
