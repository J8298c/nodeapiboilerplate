import React, {Component} from 'react';
import {getWorkouts} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class WorkoutContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            workouts: []
        }
        this.props.getWorkouts();
    }
    render(props){
        return (
            <div>
            <h1>Workout Container</h1>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getWorkouts}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);