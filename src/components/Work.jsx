import React, {useRef, useEffect} from 'react';
import {textIntro} from './animate';

const Work = () => {
  let intro = useRef(null);
  console.log(intro)
  useEffect(() => {
    textIntro(intro);
  },[])
  return (
    <div className='myWork' ref={el => (intro = el)}>
      <h4>Ogbulafor Udochukwu</h4>
      <h1>software developer</h1>
      <p>available for collaborations in Nigeria and everywhere</p>
    </div>
  )
}

export default Work
