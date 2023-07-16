import { Component } from "react";

class Step3 extends Component{
    render(){
        return(
            <>
            <h1>Welcome to femcode </h1>
            <label>
                Address
                <input type="text" 
                name="Address"
                value={FormData.address}
                onChange={handlechange}/>
            </label>
            <label>
                City:
                <input type="text" 
                name="City"
                value={FormData.city}
                onChange={handlechange}/>
            </label>
            <label>
                Country
                <input type="text" 
                name="Country"
                value={FormData.country}
                onChange={handlechange}/>
            </label>
            </>
        )
    }
}

export default Step3;