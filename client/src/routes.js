import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import WorkoutContainer from './components/Workout/WorkoutContainer';
import Workout from './components/Workout/Workout';
import rootReducer from './reducers/index';
import { Login, SignUp } from './components/Authentication/exporter';

const initialState = {
  workouts: [],
  user: null,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
                <Route path="/" component={WorkoutContainer} />
                <Route path="/workouts/:name" component={Workout} />
                <Route path="/login" component={Login} />
                <Route path="/SignUp" component={SignUp} />
        </Router>
    </Provider>
);

export default routes;
