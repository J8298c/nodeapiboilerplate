export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export function fetchWorkouts(workouts){
    return {
        type: FETCH_WORKOUTS,
        workouts
    }
}

