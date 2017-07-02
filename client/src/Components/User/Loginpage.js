import React, {Component} from 'react';
import input from '../inputs';
import buttons from '../buttons';
import './loginpage.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="login-page">
                <h1 className="app-title">Apollo</h1>
                <h5 className="app-description">Personal Fitness Logger</h5>
                <form action="#">
                   <input type="text" placeholder="Enter your email" />
                   <input type="password" placeholder="Enter your password" />
                    <buttons className="mdl-button mdl-js-button mdl-button--raised loginbutton app-button">
                        Login
                    </buttons>
                </form>
            </div>
        )
    }
}

export default LoginPage;