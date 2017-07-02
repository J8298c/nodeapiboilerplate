/**
 * Created by juliomojica on 6/29/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import button from '../buttons';
import './splashpage.css';

class SplashPage extends Component{
    render(){
        return(
            <div className="landing-page">
                <h1>Welcome to Apollo</h1>
                <Link to="/login"><button className="startbutton app-button mdl-button mdl-js-button mdl-button--raised">
                    Welcome
                </button></Link>
            </div>
        )
    }
}

export default SplashPage;