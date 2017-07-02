import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import SplashPage from './Components/SplashPage/SplashPage';
import LoginPage from './Components/User/Loginpage';
import Signup from './Components/User/Signup';
import Profile from './Components/User/Profile';



const routes = (
    <Router>
        <div>
            <Route exact path="/" component={SplashPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
        </div>
    </Router>
)

export default routes;