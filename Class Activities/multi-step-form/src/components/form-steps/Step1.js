import { useState } from "react";
import { BrowserRouter as Router, Route, Route, Link, Outlet } from "react-router-dom";

const step1 = ({ }) => {
    const [firstName, setFirstName] = useState('');
    const [lasttName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [course, setCourse] = useState('');
    const [errors, setError] = useState('');
    return (
        <>
            <h1>Step1: Bio Data</h1>
        </>
    )
}




export default step1;