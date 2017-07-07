import React, {Component} from 'react';
import Workouts from './Workouts';
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

export default WorkoutContainer;