import React, {Component} from 'react';
import inputs from '../inputs';
import buttons from '../buttons';
import {Link} from 'react-router-dom';

class LoginPage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Apollo</h1>
                <p>Personal Fitness Logger</p>
                <form action="#" className="login-page">
                    <input className="login-inputs" placeholder="Enter your email" />
                    <input className="login-inputs" placeholder="Enter your password" />
                    <Link to="/login"><button className="app-button mdl-button mdl-js-button mdl-button--raised loginbutton">
                        Login
                    </button></Link>
                </form>
            </div>
        )
    }
}

export default LoginPage;