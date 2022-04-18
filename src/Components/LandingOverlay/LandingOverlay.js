import React, { useEffect, useRef } from 'react';
import './LandingOverlay.scss';
import OverlaySvg from './OverlaySvg';

export default function LandingOverlay() {
  const overlayRef = useRef();

  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
      overlayRef.current.style.opacity = 0;
      setTimeout(() => {
        overlayRef.current.style.display = 'none';
      }, 550);
    }, 2800);
  }, []);

  return (
    <div className="overlay" ref={overlayRef}>
      <OverlaySvg />
    </div>
  );
}
