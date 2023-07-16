import { Component } from "react";

class Step2 extends Component{
    render(){
        return(
            <>
            <h1>Welcome to femcode </h1>
            <label>
                Email
                <input type="email" 
                name="email"
                value={FormData.email}
                onChange={handlechange}/>
            </label>
            <label>
                Password
                <input type="password" 
                name="password"
                value={FormData.password}
                onChange={handlechange}/>
            </label>
            </>
        )
    }
}

export default Step2;