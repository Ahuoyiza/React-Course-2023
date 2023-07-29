import {useRef} from 'react';


const MouseOver= ({priImg, secImg, alt}) =>{
  const imageRef = useRef(null);
  return(
    <img
      width="300px"
      height="300px"
      src= {priImg}
      alt = {alt}
      onMouseOver = {}/>)
    }
    export default MouseOver;