export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export const fetchWorkouts = (response) => {
  const action = {
    type: FETCH_WORKOUTS,
    response,
  };
  return action;
};

export const FETCH_WORKOUTS_SUCCESS = 'FETCH_WORKOUT_SUCCESS';
export const fetchWorkoutsSuccess = (workouts) => {
  const action = {
    type: FETCH_WORKOUTS_SUCCESS,
    workouts,
  };
  return action;
};

export const FETCH_WORKOUTS_ERROR = 'FETCH_WORKOUTS_ERROR';
export const fetchWorkoutError = (error) => {
  const action = {
    type: FETCH_WORKOUTS_ERROR,
    error,
  };
  return action;
};

export const getWorkouts = (response) => {
  return (dispatch) => {
    fetch('/workouts', {method: 'GET'})
        .then((response)=>{
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then((response)=> response.json())
        .then(json => {
          setTimeout(()=>{
            dispatch(fetchWorkoutsSuccess(json));
          }, 1000);
        }).catch(() => { dispatch(fetchWorkoutError()); });
  };
};
