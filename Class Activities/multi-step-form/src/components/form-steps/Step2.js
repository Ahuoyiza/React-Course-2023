import { Component } from "react";

class Step2 extends Component{
    render(){
        const {formData, handleChange} = this.props;
        
        return(
            <>
             <h1>Step 2</h1>
             <label>
                Email:
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
             </label>
             <label>
                Password:
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
             </label>
            </>
        )
    }
}
export default Step2;