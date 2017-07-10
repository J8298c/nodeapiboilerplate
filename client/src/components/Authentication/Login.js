import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Login extends Component {
  constructor() {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log('hey');
  }
  render(props){
      return (
          
          <div>

          </div>
      )
  }
}
