import { Component } from "react";

class Step2 extends Component{
    render() {
        const { ForData, handleChange } = this.props;
        return(
            <>
                <h1>Step 2</h1>
                <label>
                    Email: 
                    <input
                        type="email"
                        name="email"
                        value={FormData.email}
                    onChange={handleChange}>
                       
                    </input>
                </label>
            </>
        )
    }
}

export default step2;