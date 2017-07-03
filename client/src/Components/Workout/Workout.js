import React, {Component} from 'react';

const workout = (props)=>{
    return (
        <div className="workout-container">
            <h5>{props.name}</h5>
            <ul>
                <li>{props.reps}</li>
                <li>{props.sets}</li>
            </ul>
        </div>
    )
}
export default workout;