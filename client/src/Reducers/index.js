import {SET_WORKOUTS, SET_WORKOUTS_SUCCESS, SET_WORKOUTS_ERROR} from '../Actions/index';

const workouts = [];
export default (state = workouts, action)=> {
    if(action.type === SET_WORKOUTS){
        const {workouts} = action;
        console.log('in reducer set_workout', workouts);
        return workouts;
    } else if(action.type === SET_WORKOUTS_SUCCESS){
        const {workouts} = action;
        console.log('in reducer success');
        console.log('workouts in reducer success', workouts);
        return workouts;
    } else if(action.type === SET_WORKOUTS_ERROR){
        const {err} = action;
        console.log('in reducers err');
        return err;
    }
        return state;
}