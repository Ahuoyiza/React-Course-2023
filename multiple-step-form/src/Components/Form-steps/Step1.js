import { useState } from "react";

const step1=({})=>{
    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[course, setCourse] = useState('');
    const[errors, setErrors] = useState('');
    
    return(
        <>
            <h1>step1: Bio data</h1>

        </>
    )
    
        
}

export default Step1;