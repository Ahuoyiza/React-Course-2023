import {useRef} from 'react';

const mouseOver = ({priTag, secTag, alt}) =>{
    const imageRef = useRef(null);
    return(
        <img src='{priTag}' alt='{alt}' 
        onMouseOver={
            () => {
                imageRef.current.src = secTag
            }
        onmouseOut={
            () => {
                imageRef.current.src = PriTag
            }
        }/>
    )
}

export default mouseOver