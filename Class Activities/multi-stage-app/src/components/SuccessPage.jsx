import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const SuccessPage = () => {
  return (
    <>
      <h1>You have been registered successfully!</h1>
    </>
  );
};

export default SuccessPage;
