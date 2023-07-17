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
        <FormControl isRequired>
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
            <FormLabel> Firstname: </FormLabel>
            <Input 
                type="email"
                placeholder="your email address"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel> Firstname: </FormLabel>
            <Input 
                type="password"
                placeholder="Enter password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </FormControl>
        <Select value={course} onChange={(e) =>setCourse(e.target.value)}>
            <FormLabel>Choose your preferred course</FormLabel>
            <option value="React">React</option>
            <option value="Vue">React</option>
            <option value="Angular">React</option>
        </Select>
        <Button>Next</Button>
        </>
    )
}
export default Step1;