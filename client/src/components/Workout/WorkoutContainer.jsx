import React, {Component} from 'react';
import Workouts from './Workouts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWorkouts} from '../../actions/index';

class WorkoutContainer extends Component{
    render(props){
        const workout = [{
            name: 'Bench Press',
            sets: 4,
            reps: 10
            },
            {
            name: 'Squats',
            sets: 3,
            reps: 10
        }]
        const workoutCard = workout.map((workout, index)=>{
            return <Workouts name={workout.name} sets={workout.sets}
                reps={workout.reps} key={index}/>
        })
        return(
            <div>
                {workoutCard}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state, 'state in store at workout container')
    return {
        state
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getWorkouts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);