import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import WorkoutContainer from './components/Workout/WorkoutContainer';
import Workout from './components/Workout/Workout';
import workoutReducer from './reducers/index';

const initialState = {
  workouts: [],
  user: null,
};

const store = createStore(workoutReducer, initialState, applyMiddleware(thunk));

const routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
                <Route path="/" component={WorkoutContainer} />
                <Route path="/:name" component={Workout} />
        </Router>
    </Provider>
);

export default routes;