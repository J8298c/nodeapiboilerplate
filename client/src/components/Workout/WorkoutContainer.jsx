import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Workouts from './Workouts';
import { getWorkouts } from '../../actions/index';

class WorkoutContainer extends Component {
  constructor(props) {
    super(props);
    this.props.getWorkouts();
  }
  render() {
    const { workouts } = this.props.state;
    let key = 0;
    const workoutCard = workouts.map((excersise) => 
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
  return bindActionCreators({ getWorkouts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);
