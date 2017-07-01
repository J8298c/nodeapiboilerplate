import React, {Component} from 'react';
import inputs from '../inputs';
import buttons from '../buttons';
class Login extends Component{
    //needs to handle user state
    render(){
        return(
            <Form>
                <inputs className="login-input" placeholder="Enter your username" />
                <inputs className="login-input" placeholder="Enter your username" />
                <buttons className="mdl-button mdl-js-button mdl-button--raised startbutton app-button">Login</buttons>
            </Form>
        )
    }
}