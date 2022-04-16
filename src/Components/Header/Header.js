import React, { useEffect, useRef } from 'react';
import './Header.scss';
import HeaderImage from '../../Assets/svg/HeaderSvg.svg';
import Video from '../../Assets/video/headerVideo.mp4';

export default function Header() {
  const video = useRef();

  useEffect(() => {
    video.current.play();
    console.log(video.current);
  }, []);
  return (
    <div id="header">
      <video ref={video} loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src={HeaderImage} />
    </div>
  );
}
