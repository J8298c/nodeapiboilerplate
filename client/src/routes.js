import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import WorkoutContainer from './components/Workout/WorkoutContainer';
import Workout from './components/Workout/Workout';
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
        <Router history={browserHistory}>
                <Route path="/" component={WorkoutContainer} />
                <Route path="/:name" component={Workout} />
        </Router>
    </Provider>
)

export default routes;