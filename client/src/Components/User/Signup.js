import React, {Component} from 'react';
import input from '../inputs';
import button from '../buttons';
import './loginpage.css';

class Signup extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="signup-page">
                <h1 className="app-title">Apollo</h1>
                <h5 className="app-description">Personal Fitness Logger</h5>
                <form className="signup-form">
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <input type="text" placeholder="Enter a usename" className="username-signup" />
                    <buttons className="mdl-button mdl-js-button mdl-button--raised loginbutton app-button">
                    Signup
                    </buttons>
                </form>
            </div>
        )
    }
}

export default Signup;