import { Component } from "react";

class Step3 extends Component{
    render() {
        const { ForData, handleChange } = this.props;
        return(
            <>
                <h1>Step 3</h1>
                <label >
                    Email: 
                    <input
                        type="text"
                        name="city"
                        value={FormData.email}
                    onChange={handleChange}>
                       
                    </input>
                </label>
            </>
        )
    }
}

export default step3;