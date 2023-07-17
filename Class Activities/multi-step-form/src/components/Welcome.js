import { Component } from "react";
import {Link} from "react-router-dom";

class Welcome extends Component{
    render(){
        return(
            <>
             <h1>Welcome to Femcode Africa</h1>
            <p>React Bootcamp to start tomorrow</p>
            <Link to = "/register">Click here to Register</Link>
            </>
        )
    }
}
export default Welcome;