/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useRef } from "react";
import MouseOver from "./component/MouseOver";

const ImageMouseOver = ({ priImage, alt, secImage }) => {
  return (
    <div>
      <h1>useRef Example</h1>
      <p>Using image mouse over effect</p>

      <MouseOver />
    </div>
  );
};

export default ImageMouseOver;
