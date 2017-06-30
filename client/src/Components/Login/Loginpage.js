import React, {Component} from 'react';
import inputs from '../inputs';
import buttons from '../buttons';
class Login extends Component{
    render(){
        return(
            <Form>
                <inputs className="login-input" placeholder="Enter your username" />
                <inputs className="login-input" placeholder="Enter your username" />
                <buttons className="start-button app-button">Login</buttons>
            </Form>
        )
    }
}