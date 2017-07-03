import React, {Component} from 'react';

const workouts = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.reps}</p>
            <p>{props.sets}</p>
        </div>
    )
}

export default workouts;

