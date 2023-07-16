import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

const Step1 = ({} )=>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [course, setCourse] = useState('');
    const [errors, setErrors] = useState({});
    return (
        <>
        <h1>Step 1: Bio Data</h1>

        </>
    )
}
export default Step1;