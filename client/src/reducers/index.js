import { combineReducers } from 'redux';

import userReducer from './userreducer';
import workoutReducer from './workoutreducer';

const rootReducer = combineReducers({
    userReducer,
    workoutReducer
})

export default rootReducer;
