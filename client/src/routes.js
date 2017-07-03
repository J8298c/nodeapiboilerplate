import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import SplashPage from './Components/SplashPage/SplashPage';
import LoginPage from './Components/User/Loginpage';
import Signup from './Components/User/Signup';
import Profile from './Components/User/Profile';
import WorkoutContainer from './Components/Workout/WorkoutContainer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import WorkoutReducers from './Reducers/index';
import thunk from 'redux-thunk';

const initAppState = {
    user: null,
    workouts: []
}

const store = createStore(WorkoutReducers, initAppState, applyMiddleware(thunk));

const routes = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={SplashPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/signup" component={Signup} />
                <Route path="/profile" component={Profile} />
                <Route path="/workouts" component={WorkoutContainer} />
            </div>
        </Router>
    </Provider>
)

export default routes;