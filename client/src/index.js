import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutContainer from './components/workoutContainer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import workoutReducer from './reducers/index';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
 const initialState = [];
const store = createStore(workoutReducer, initialState, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <WorkoutContainer />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
