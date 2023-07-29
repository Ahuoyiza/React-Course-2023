/* eslint-disable jsx-a11y/alt-text */
"use client";
import ToggleOnScroll from "../component/ToggleOnScroll";

const ImageToggleOnScroll = () => {
  return (
    <div>
      <h1>useRef Example</h1>
      <p>using image mouse over effect </p>
      <div>
        <ToggleOnScroll
          priImg="https://res.cloudinary.com/sophire/image/upload/v1690652466/2_ife5w0.png"
          secImg="https://res.cloudinary.com/sophire/image/upload/v1690652465/1_tx0uos.png"
          alt="speaker1"
        />
      </div>
      <div>
        <ToggleOnScroll
          priImg="https://res.cloudinary.com/sophire/image/upload/v1690652461/6_oxk5md.png"
          secImg="https://res.cloudinary.com/sophire/image/upload/v1690652464/5_hpzz97.png"
          alt="speakers"
        />
      </div>

      <div>
        <ToggleOnScroll
          priImg="https://res.cloudinary.com/sophire/image/upload/v1690652465/8_zyzmjb.png"
          secImg="https://res.cloudinary.com/sophire/image/upload/v1690652467/7_xqbrfx.png"
          alt="speakers"
        />
      </div>

      <div>
        <ToggleOnScroll
          priImg="https://res.cloudinary.com/sophire/image/upload/v1690652468/4_fnoqf2.png"
          secImg="https://res.cloudinary.com/sophire/image/upload/v1690652467/3_uxlbn0.png"
          alt="speakers"
        />
      </div>

      <div>
        <ToggleOnScroll
          priImg="https://res.cloudinary.com/sophire/image/upload/v1690652465/10_njo4mo.png"
          secImg="https://res.cloudinary.com/sophire/image/upload/v1690652466/9_ba9axi.png"
          alt="speakers"
        />
      </div>
    </div>
  );
};

export default ImageToggleOnScroll;
