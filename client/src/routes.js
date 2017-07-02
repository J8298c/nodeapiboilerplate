import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import SplashPage from './Components/SplashPage/SplashPage';
import LoginPage from './Components/Login/Loginpage';
import Signup from './Components/Login/Signup';
const routes = (
    <Router>
        <div>
            <Route exact path="/" component={SplashPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={Signup} />
        </div>
    </Router>
)

export default routes;