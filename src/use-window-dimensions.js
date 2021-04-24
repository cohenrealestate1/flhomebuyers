// @flow
import { useEffect, useState } from 'react';

function getWindowDimensions() {

  if (typeof screen === "undefined") {
    return {
      width: 0,
      height: 0,
    }
  }
  const screenWidth = screen.width;

  // desktop
  if (screenWidth > 718) {
    if (typeof window === "undefined") {
      return {
        width: 0,
        height: 0
      }
    }
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  // mobile
  return {
    width: screen.width,
    height: screen.height,
    isMobile: true
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
