import React, { Component } from "react";

class Step1 extends Component {
  render() {
    const { formData, handleChange } = this.props;
    return (
      <>
        <h1>Welcome to Femcode </h1>
        <h4>Register to join the cohort</h4>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="firstName"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </label>
      </>
    );
  }
}

export default Step1;
