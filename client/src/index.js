import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';



import registerServiceWorker from './registerServiceWorker';
//  const initialState = [];
// const store = createStore(workoutReducer, initialState, applyMiddleware(thunk));


ReactDOM.render(
routes, document.getElementById('root'));
registerServiceWorker();
