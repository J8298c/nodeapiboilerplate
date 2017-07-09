/**
 * Created by juliomojica on 7/9/17.
 */
import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.SignUp = this.SignUp.bind(this);
  }
  SignUp(event) {
    event.preventDefault();
    const { email, password } = this.state;
    console.log(email, 'user email');
    console.log(password, 'user password');
  }
  render(props) {
    return (
      <form>
        <Input
          className="signup-email" type="text"
          onChange={(e) => { this.setState({ email: e.target.value }); }}
        />
        <Input
          className="signup-password" type="password"
          onChange={(e) => { this.setState({ passowrd: e.target.value }); }}
        />
        <Button className="submitButton" onSubmit={this.SignUp} text="Submit" />
      </form>
    );
  }
}

export default Signup;
