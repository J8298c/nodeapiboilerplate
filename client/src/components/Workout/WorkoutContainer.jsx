import React, { Component } from 'react';
import Workouts from './Workouts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWorkouts } from '../../actions/index';

class WorkoutContainer extends Component {
  constructor(props) {
    super(props);
    this.props.getWorkouts();
  }
  render(props) {
    const workout = [{
      name: 'Bench Press',
      sets: 4,
      reps: 10,
    },
    {
      name: 'Squats',
      sets: 3,
      reps: 10,
    }];
    let key = 0;
    const workoutCard = workout.map((excersise) => 
      (<Workouts 
        name={excersise.name} sets={excersise.sets}
        reps={excersise.reps} key={key++}
      />));
    return (
            <div>
                {workoutCard}
            </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWorkouts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);
