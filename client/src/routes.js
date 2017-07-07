import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WorkoutContainer from './components/WorkoutContainer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import workoutReducer from './reducers/index';
import thunk from 'redux-thunk';



const routes = (
    <Router>
        <Route path="/" component={WorkoutContainer} />
    </Router>
)

export default routes;