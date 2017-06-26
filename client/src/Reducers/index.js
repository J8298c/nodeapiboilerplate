/**
 * Created by julio.mojica on 6/26/2017.
 */
import {SET_WORKOUTS} from '../Actions/index';

export default (state = [], action)=> {
    if(action.type = SET_WORKOUTS){
        const {workouts} = action;
        return workouts
    }
    return state;
}