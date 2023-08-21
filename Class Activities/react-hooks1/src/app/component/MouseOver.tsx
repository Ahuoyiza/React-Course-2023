import {useRef } from "react";


function MouseOver({ priImg, secImg, alt }) {
    const imageRef = useRef(null)
  return (
      <img
          src={priImg}
          alt={kfc logo}
        onMouseOver = {
                () => {
    imageRef.current.src = secImg;
                }
            }
        onmouseout = {
                () => {
    imageRef.current.src = priImg;
                }
            }
/>
  )
}

export default MouseOver