import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state, 'state');
  }
  render(props) {
    return (
      <form>
        <Input type="text" className="login-input" onChange={(event)=>{this.setState({email: event.target.value })}} />
        <Input type="password" className="login-input" onChange={(event)=>{this.setState({password: event.target.value })}} />
        <Button className="submit" onClick={this.onFormSubmit} text="Submit" />
      </form>
    );
  }
}
export default Login;

