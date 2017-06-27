import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import workoutReducer from './Reducers/index';
import {Provider} from 'react-redux';
import App from './Components/App';
const initialAppState = {
    workouts: []
};

const store = createStore(workoutReducer, initialAppState, applyMiddleware(thunk));

 const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={'/'} component={App}/>
        </Router>
    </Provider>
);

 export default Routes;

