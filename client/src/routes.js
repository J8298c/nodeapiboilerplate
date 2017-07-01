import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import SplashPage from './Components/SplashPage/SplashPage';
import LoginPage from './Components/Login/Loginpage';

const routes = (
    <Router>
        <div>
        <Route path="/" component={SplashPage} />
        <Route path="/login" component={LoginPage} />
        </div>
    </Router>
);

export default routes;