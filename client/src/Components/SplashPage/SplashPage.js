/**
 * Created by juliomojica on 6/29/17.
 */
import React, {Component} from 'react';
import button from '../buttons';
import './splashpage.css';

class SplashPage extends Component{
    render(){
        return(
            <div className="landing-page">
                <h1>Welcome to Apollo</h1>
                <button className="button-normal">Welcome</button>
            </div>
        )
    }
}

export default SplashPage;