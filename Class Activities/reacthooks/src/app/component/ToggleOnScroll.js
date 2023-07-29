/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { useRef, useState, useEffect } from "react";

const ToggleOnScroll = ({ priImg, secImg, alt }) => {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  const onScrollHandler = () => {
    setInView(isInView());
  };
  return (
    <img
      width="300px"
      height="300px"
      src={inView ? secImg : priImg}
      alt={alt}
      ref={imageRef}
    />
  );
};

export default ToggleOnScroll;
