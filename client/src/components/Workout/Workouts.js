import React, { Component } from 'react';
import { Link } from 'react-router';

class Workout extends Component {
  render(props){
    const workoutLink = `/${this.props.name}`;
    return (
            <div>        
                <Link to={workoutLink}>
                    <h1>{this.props.name}</h1>
                </Link>
                <p>{this.props.sets}</p>
                <p>{this.props.reps}</p>
            </div>
    );
  }
}

export default Workout;