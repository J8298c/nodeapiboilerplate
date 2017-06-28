/**
 * Created by juliomojica on 6/25/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchingWorkouts} from '../Actions/index';

class App extends Component{
constructor(props){
    super(props);
    this.setWorkouts = this.setWorkouts.bind(this);
    this.state = null;
}
setWorkouts(e){
    e.preventDefault();
    console.log('fetchngworkouts');
    this.props.fetchingWorkouts()
}
    render(props){
    console.log(this.props.workouts, 'the props');
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
    console.log(state);
    return state;
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchingWorkouts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);