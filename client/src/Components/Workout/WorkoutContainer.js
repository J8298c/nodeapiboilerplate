import React, {Component} from 'react';
import Workouts from './Workouts';
import bindActionsCreator from 'redux';

class WorkoutContainer extends Component {
    componentWillMount(props){
        //call async dispatch to fetch workouts
    }
    constructor(props){
        super(props);
        this.state = {
            workouts: []
        }
    }
    render(){
        return (
            <div>
                <Workouts />
            </div>
        )
    }

}
function mapDispatchToProps(dispatch){
//add dispatch
}