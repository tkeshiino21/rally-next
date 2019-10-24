import React, { Component } from 'react'
import Address from '../components/Address'
import Commute from '../components/Commute'
import Confirm from '../components/Confirm'
import Success from '../components/Success'

export default class UserForm extends Component {

  state = {
    step: 1,
    personalNum: "",
    personalName: "",
    addressNum: "",
    address1: "",
    address2: "",
    address3: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep =() =>{
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

render() {
    const { step } = this.state;
    const {
      personalNum,
      personalName,
      addressNum,
      address1,
      address2,
      address3,
      method } = this.state;
    const values = {
      personalNum,
      personalName,
      addressNum,
      address1,
      address2,
      address3,
      method
    };

    //step1-4の分岐
    switch (step) {
      case 1:
        return (
          <Address
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 2:
        return (
          <Commute
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            values={values}
          />
        )

      case 4:
        return <Success/>;

      default:
        console.log('switch構文のテストです')
    }
  }
}