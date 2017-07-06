import React, {Component} from 'react';

export default (props)=>{
    return (
        <div className="workout-container">
            <h1>{props.name}</h1>
            <hr />
            <p>{props.sets}</p>
            <p>{props.reps}</p>
            <button>Log</button>
        </div>
    )
}