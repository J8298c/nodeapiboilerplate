import React, {Component} from 'react';

class AddWorkout extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            reps: '',
            sets: ''
        }
    }
    render(){
        return (
            <form>
                <div>
                    <label htmlFor='name'>Workout Name</label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label htmlFor='reps'>Workout Reps</label>
                    <input type='text' name='reps' />
                </div>
                <div>
                    <label htmlFor='sets'>Workout Sets</label>
                    <input type='text' name='sets' />
                </div>
                <button>Submit</button>
            </form>
        )
    }
}