import React, { Component } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Confirm from './Confirm';
import Finalmessage from './Finalmessage';

export class Wizard extends Component  {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <Screen1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Screen2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Finalmessage />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Wizard;
