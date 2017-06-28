export const SET_WORKOUTS = 'SET_WORKOUTS';
export function set_workouts(workouts){
     const action = {
        type: SET_WORKOUTS,
        workouts
    };
    return action;
}
export const SET_WORKOUTS_SUCCESS = 'SET_WORKOUTS_SUCCESS';
export function set_workouts_success(workouts){
    const action ={
        type: SET_WORKOUTS_SUCCESS,
        workouts
    };
    return action
}

export const SET_WORKOUTS_ERROR = 'SET_WORKOUTS_ERROR';
export function set_workouts_error(err){
    const action = {
        type: SET_WORKOUTS_ERROR,
        err
    };
    return action
}



export function fetchingWorkouts(){
    return(dispatch)=>{
        dispatch(set_workouts());
        fetch('/workouts')
            .then(res => res.json())
            .then(workouts=>{
                dispatch(set_workouts_success(workouts))
            })
            .catch(()=>dispatch(set_workouts_error()))
    }
}
