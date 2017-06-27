import {SET_WORKOUTS, SET_WORKOUTS_SUCCESS, SET_WORKOUTS_ERROR} from '../Actions/index';

export default (state = [], action)=> {
    if(action.type === SET_WORKOUTS){
        const {workouts} = action;
        console.log('in reducer set_workout')
        return workouts;
    } else if(action.type === SET_WORKOUTS_SUCCESS){
        const {workouts} = action;
        console.log('in reducer success');
        console.log('workouts in reducer success', workouts);
        const new_state = Object.assign({}, state, {workouts: [workouts, ...state]})
        return new_state;
    } else if(action.type === SET_WORKOUTS_ERROR){
        const {err} = action;
        console.log('in reducers err');
        return err;
    }
    return state;
}