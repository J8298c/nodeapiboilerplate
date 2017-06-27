/**
 * Created by juliomojica on 6/25/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchingWorkouts} from '../Actions/index';

class App extends React.Component{
constructor(props){
    super(props);
    this.setWorkouts = this.setWorkouts.bind(this);
}
setWorkouts(e){
    e.preventDefault();
    console.log('fetchngworkouts');
    this.props.fetchingWorkouts()
}
    render(){
        return(
            <div>
                <h1>node workouts</h1>
                <button onClick={this.setWorkouts}>
                    Set Workouts
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {workouts} = state;
    console.log('workouts in mapstate', workouts);
    return {
        workouts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchingWorkouts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);