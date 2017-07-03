export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export function setWorkouts(workouts){
    const action = {
        type: FETCH_WORKOUTS,
        workouts
    }
    return action;
}

export const FETCH_WORKOUTS_SUCCESS = 'FETCH_WORKOUTS_SUCCESS';
export function fetchWorkoutsSuccess(response){
    const action = {
        type: FETCH_WORKOUTS_SUCCESS,
        response
    }
    return action;
}

export const FETCH_WORKOUTS_ERROR = 'FETCH_WORKOUTS_ERROR';
export function fetchWorkoutsError(response){
    const action = {
        type: FETCH_WORKOUTS_ERROR,
        response
    }
    return action;
}