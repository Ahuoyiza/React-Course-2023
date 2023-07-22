/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useRef } from "react";

const MouseOver = ({ priImage, alt, secImage }) => {
  const ImageRef = useRef(null);
  return (
    <div>
      <Image
        src={priImage}
        onMouseOver={() => {
          ImageRef.current.src = secImage;
          alt = { alt };
        }}
        onMouseOut={() => {
          ImageRef.current.src = priImage;
          alt = { alt };
        }}
      />
    </div>
  );
};

export default MouseOver;
