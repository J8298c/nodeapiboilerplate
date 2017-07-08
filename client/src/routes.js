import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WorkoutContainer from './components/WorkoutContainer';
import Workout from './components/Workout'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import workoutReducer from './reducers/index';
import thunk from 'redux-thunk';

const initialState = {
    workouts: [],
    user: null
}

const store = createStore(workoutReducer, initialState, applyMiddleware(thunk));

const routes = (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={WorkoutContainer} />
                <Route path="/:name" component={Workout} />
            </div>
        </Router>
    </Provider>
)

export default routes;