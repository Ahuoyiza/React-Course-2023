import { useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Button,
  } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

const Step1 = ( {onNext})=>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [course, setCourse] = useState('');
    const [errors, setErrors] = useState({});

    const handleNext = () => {
        const errors = {}
        if (!firstName){
            errors.firstName = 'First Name is required';
        };
        if (!lastName){
            errors.lastName = 'Last Name is required';
        };
        if (!password){
            errors.password = 'Password is required';
        };
        if (!email){
            errors.firstName = 'email is required';
        }else if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            errors.email = 'Email is invalid'
        };
        if (Object.keys(errors).length === 0){
            onNext({firstName,lastName,email,password,course})
        }
    }


    return (
        <div>
        <h1>Step 1: Bio Data</h1>
        <FormControl >
            <FormLabel> Firstname: </FormLabel>
            <Input 
                type="text"
                placeholder="Enter first name"
                value = {firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <FormLabel> Lastname: </FormLabel>
            <Input 
                type="text"
                placeholder="Enter Lastt name"
                value = {lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <FormLabel> Email: </FormLabel>
            <Input 
                type="email"
                placeholder="your email address"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel> Password: </FormLabel>
            <Input 
                type="password"
                placeholder="Enter password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </FormControl>
        <FormLabel>Choose your preferred course</FormLabel>
        <Select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
        </Select>
        <Button onClick={handleNext}>Next</Button>
        </div>
    )
}
export default Step1;