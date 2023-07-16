import { Component } from "react";

class Step1 extends Component{
    render() {
        const { ForData, handleChange } = this.props;
        return(
            <>
                <h1>Welcome to Femcode Africa</h1>
                <p>React Bootcamp to start tomorrow</p>
            </>
        )
    }
}

export default step1;