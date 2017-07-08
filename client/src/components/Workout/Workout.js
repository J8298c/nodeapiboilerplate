import React, {Component} from 'react';

class Workout extends Component{
    componentWillMount(props){
        const findWorkoutUrl = `/workouts/${this.props.params.name}`
        fetch(findWorkoutUrl, {method: 'Get'})
            .then((response)=>{
                return response;
            })
            .then((response)=>{response.json()})
            .then(json =>{})
    }
    render(props){
        console.log(this.props);
        const {name} = this.props.params;
        console.log(name);
        return(
            <div>
                <h1>{name}</h1>
            </div>
        )
    }
        
}
export default Workout;
