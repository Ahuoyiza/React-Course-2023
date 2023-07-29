/* eslint-disable jsx-a11y/alt-text */
import MouseOver from "../component/MouseOver";
const ImageMouseOver = () => {
  return (
    <div>
      <h1>useRef Example</h1>
      <p>using image mouse over effect </p>
      <MouseOver
        priImg="https://res.cloudinary.com/sophire/image/upload/v1690652466/2_ife5w0.png"
        secImg="https://res.cloudinary.com/sophire/image/upload/v1690652465/1_tx0uos.png"
        alt="speaker1"
      />
      <MouseOver
        priImg="https://res.cloudinary.com/sophire/image/upload/v1690652468/4_fnoqf2.png"
        secImg="https://res.cloudinary.com/sophire/image/upload/v1690652467/3_uxlbn0.png "
        alt="speaker2"
      />
    </div>
  );
};
export default ImageMouseOver;
