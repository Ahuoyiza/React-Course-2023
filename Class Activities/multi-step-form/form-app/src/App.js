import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Step1 from './components/form-steps/Step1';
import Step2 from './components/form-steps/Step2';
import Welcome from "./components/Welcome";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <Router>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={2}>
          <h1>Registeration form</h1>
          <Routes>
            <Route exact path="/" Component= {Welcome}/>
            <Route  path="/register" Component= {Step1}/>
            <Route path="/step2" Component= {Step2}/>
          </Routes>
            </VStack>
        </Grid>
      </Box>
      </ChakraProvider>
      </Router>
    
  );
}

export default App;
