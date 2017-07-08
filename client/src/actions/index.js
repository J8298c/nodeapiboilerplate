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

export const getWorkouts = (response)=>{
    return (dispatch) => {
        fetch('/workouts', {method: 'GET'})
        .then((response)=>{
            if(!response.ok){
                throw Error(response.statusText)
            }
            return response;
        })
        .then((response)=> response.json())
        .then(json => {
            setTimeout(()=>{
                dispatch(fetchWorkoutsSuccess(json))
            }, 1000)
        }).catch(()=>{dispatch(fetchWorkoutError())})
    }
}
