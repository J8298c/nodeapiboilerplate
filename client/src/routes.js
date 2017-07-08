import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WorkoutContainer from './components/WorkoutContainer';
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
            <Route path="/" component={WorkoutContainer} />
        </Router>
    </Provider>
)

export default routes;