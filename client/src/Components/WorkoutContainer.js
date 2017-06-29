import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchingWorkouts} from '../Actions/index';

class WorkoutContainer extends Component{
  constructor(props){
    super(props);
    this.setWorkouts = this.setWorkouts.bind(this);
  }
  setWorkouts(){

  }
  render(){
    return(
      <div>
        <div>
            <h1>node workouts</h1>
            <button onClick={this.setWorkouts}>
                Set Workouts
            </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {workouts} = state;
  return {
    workouts
  }
}

function mapDispatchToProps(dispatch){
      return bindActionCreators({fetchingWorkouts}, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App);
