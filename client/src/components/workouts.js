import React, {Component} from 'react';

export default (props)=>{
    return(
        <div>        
            <h1>{props.name}</h1>
            <p>{props.sets}</p>
            <p>{props.reps}</p>
        </div>

    )
}