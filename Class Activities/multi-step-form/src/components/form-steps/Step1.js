import { Component } from "react";

class Step1 extends Component{
    render(){
        const {formData, handleChange} = this.props;

        return(
            <>
             <h1>Welcome to Femcode</h1>
             <h4>Register to join the cohort</h4>

             <label>
                Firstname: 
                <input
                 type="text"
                 name= "firstName"
                 value={formData && formData.firstName}
                 onChange={handleChange}
                />
             </label>
             <label>
                Lastname: 
                <input
                 type="text"
                 name= "lastName"
                 value={formData && formData.lastName}
                 onChange={handleChange}
                />
             </label>
            </>
        )
    }
}
export default Step1;