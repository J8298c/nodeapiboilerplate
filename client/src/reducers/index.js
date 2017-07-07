import {FETCH_WORKOUTS, FETCH_WORKOUTS_SUCCESS, FETCH_WORKOUTS_ERROR} from '../actions/index';

const workoutReducer = (state = [], action)=>{
    if(action.type === FETCH_WORKOUTS){
        return action.response;
    }
    else if(action.type === FETCH_WORKOUTS_SUCCESS){
        return action.workouts;
    }
    else if(action.type === FETCH_WORKOUTS_ERROR){
        return action.error
    }
    else {
        return state;
    }
}

export default workoutReducer;