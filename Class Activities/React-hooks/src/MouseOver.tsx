import {useRef} from 'react';


const MouseOver= ({priImg, secImg, alt}) =>{
  const imageRef = useRef(null);
  return(
    <img
      width="300px"
      height="300px"
      src= {priImg}
      alt = {alt}
      onMouseOver = {
        () => {
          imageRef.current.src = secImg;
        }
      }
      onMouseOut = {
        () => {
          imageRef.current.src = priImg;
        }
      }
      ref = {imageRef}
    />
  )
}
export default MouseOver