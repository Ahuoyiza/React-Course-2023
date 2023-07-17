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

const Step2 = ({onPrevious, onNext} )=>{
    const [profiency, setProfiency] = useState('');
    const [github, setGithub] = useState('');
    const [mobile, setMobile] = useState('');
    const [cohort, setCohort] = useState('');

  
    const handleNext = ({onNext}) => {
    onNext({profiency,github,mobile,cohort})
        
    }


    return (
        <div>
        <h1>Step 2: Additional info</h1>
        <FormControl >
          <FormLabel>What's your javascript profiency</FormLabel>
          <Select value={profiency} onChange={(e) => setProfiency(e.target.value)}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
          </Select>
            <FormLabel> Github profile url: </FormLabel>
            <Input 
                type="text"
                placeholder="Enter github link"
                value = {github}
                onChange={(e) => setGithub(e.target.value)}
            />
            <FormLabel> Mobile no: </FormLabel>
            <Input 
                type="tel"
                placeholder="enter mobile number"
                value = {mobile}
                onChange={(e) => setMobile(e.target.value)}
            />
            <FormLabel>Choose your preferred cohort</FormLabel>
          <Select value={cohort} onChange={(e) => setCohort(e.target.value)}>
              <option value="1">Cohort 1</option>
              <option value="2">Cohort 2</option>
          </Select>
          <Button onClick={handleNext}>Submit</Button>
        </FormControl>
        
        </div>
    )
}
export default Step2;