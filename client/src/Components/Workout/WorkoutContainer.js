import React, {Component} from 'react';
import Workouts from './Workouts';
import { bindActionCreators } from 'redux';
import {fetchingWorkouts} from '../../Actions/index';
import {connect} from 'react-redux';

class WorkoutContainer extends Component {
    componentWillMount(props){
       this.props.fetchingWorkouts;
    }
    constructor(props){
        super(props);
        this.state = {
            workouts: []
        }
    }
    render(props){
        return (
            <div>
                <Workouts />
            </div>
        )
    }

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchingWorkouts}, dispatch)
}
export default connect(mapDispatchToProps)(WorkoutContainer);