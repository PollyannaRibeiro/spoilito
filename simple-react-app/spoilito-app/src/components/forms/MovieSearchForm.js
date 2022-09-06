import React from 'react';
import ArrayHelper from '../../helpers/arrayHelper';
import TypeForm from './movieSearchForms/typeForm';
import GenreForm from './movieSearchForms/genreForm';

const TriggerDefault =  "trigger-none";


class MovieSearchForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            triggerState: [TriggerDefault ]

        };
        
        this.handleInputTriggerChange = this.handleInputTriggerChange.bind(this);

    }



    handleInputTriggerChange(event){

        let newTriggerArray = [...this.state.triggerState]

        if (event.target.checked) {
            newTriggerArray.push(event.target.name);
        } else {
            ArrayHelper.remove(event.target.name, newTriggerArray);
        }

        if (newTriggerArray.length > 1 && newTriggerArray.includes(TriggerDefault)) {
            ArrayHelper.remove(TriggerDefault, newTriggerArray);
        } else if (newTriggerArray.length == 0) {
            newTriggerArray.push(TriggerDefault);
        }

        this.setState({
            triggerState: newTriggerArray
        });
    }


    render(){
        return (
            <div className="MovieSearchForm">
                <form>
                    
                    <TypeForm />
             
                    <GenreForm />

                    <br></br>
                    I don't want to watch movies that contain the following triggers:
                    <br></br>
                    <label>
                        <input 
                            type="checkbox" 
                            name="trigger-none" 
                            checked={this.state.triggerState.includes("trigger-none")}
                            onChange={this.handleInputTriggerChange}/>
                        Don't Worry with me 
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="trigger-adult" 
                            checked={this.state.triggerState.includes("trigger-adult")}
                            onChange={this.handleInputTriggerChange}/>
                        18+
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="trigger-child-abuse" 
                            checked={this.state.triggerState.includes("trigger-child-abuse")}
                            onChange={this.handleInputTriggerChange}/>
                        child sex abuse
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="trigger-sexual-harassment" 
                            checked={this.state.triggerState.includes("trigger-sexual-harassment")}
                            onChange={this.handleInputTriggerChange}/>
                        sexual harassment
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="trigger-sexual-assault" 
                            checked={this.state.triggerState.includes("trigger-sexual-assault")}
                            onChange={this.handleInputTriggerChange}/>
                        sexual assault or rape
                    </label>
                    
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>

            </div>);
    }
}
export default MovieSearchForm;
