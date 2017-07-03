import {FETCH_WORKOUTS, FETCH_WORKOUTS_SUCCESS, FETCH_WORKOUTS_ERROR, fetchingWorkouts} from '../Actions/index';
import store from '../routes';

export default (state = [], action)=>{
    if(action.type === FETCH_WORKOUTS){
        return(dispatch)=>{
            store.dispatch(fetchingWorkouts)
        }
    } 
    else if (action.type === FETCH_WORKOUTS_SUCCESS){
        let returnedWorkouts = action.response;
        const newState = Object.assign({}, state, {
            workouts: returnedWorkouts
        });
        return newState
    } 
    else if(action.type === FETCH_WORKOUTS_ERROR){
        return action.response
    }
    return state;
};