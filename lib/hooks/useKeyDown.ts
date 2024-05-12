import { useEffect } from 'react';

const useKeyDown = (callback: (event: KeyboardEvent) => void, 
                      keys: string[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const wasAnyKeyPressed = keys.some((key) => event.key === key);
      if (wasAnyKeyPressed) {
        event.preventDefault();
        callback(event);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback, keys]);
};

export default useKeyDown;