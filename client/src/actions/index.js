export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export const fetchWorkouts = (response)=>{
    const action = {
        type: FETCH_WORKOUTS,
        response
    }
    console.log('action in fetchworkout', action);
    return action;
}

export const FETCH_WORKOUTS_SUCCESS = 'FETCH_WORKOUT_SUCCESS';
export const  fetchWorkoutsSuccess = (workouts)=>{
    const action = {
        type: FETCH_WORKOUTS_SUCCESS,
        workouts
    }
    console.log('action in fetchworkoutSuccess', action);
    return action;
}

export const FETCH_WORKOUTS_ERROR = 'FETCH_WORKOUTS_ERROR';
export const fetchWorkoutError = (error)=>{
    const action = {
        type: FETCH_WORKOUTS_ERROR,
        error
    }
    console.log('action in fetchworkoutError', action);
    return action;
}

export function getWorkouts(workouts){
    return (dispatch)=>{
        dispatch(fetchWorkouts())
        return fetch('/workouts')
        .then(
            response => response.json(),
            error => console.log('An error has occured', error)
        )
        .then(
            json => 
            dispatch(fetchWorkoutsSuccess(workouts))
        )
    }
}
