import React from 'react';
import ArrayHelper from '../../../helpers/arrayHelper';

const TriggerDefault =  "trigger-none";

class TriggerForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            triggerState: [TriggerDefault],
        };
        this.handleInputTriggerChange = this.handleInputTriggerChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        console.log("😰", this.props.triggerState);

        if (prevProps.triggerState === this.props.triggerState ||
            prevProps.triggerState.join(".") === this.props.triggerState.join(".")) {
            return;
        }

        console.log("🥶🥶", this.props.triggerState);

        if (this.props.genreState == []){
            this.setState({
                triggerState: TriggerDefault
            });
        } else {
            this.setState({
                triggerState: this.props.triggerState
            });
        }
    }

    handleInputTriggerChange(event){

        // deselect everything if default is selected
        if (event.target.name == TriggerDefault){
            this.setState({
                triggerState: [TriggerDefault]
            }, function () {
                this.props.onSubmitValue(this.state.triggerState);
            });
            return;
        }

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
        }, function () {
            if (this.state.triggerState[0] == TriggerDefault){
                this.props.onSubmitValue([]);
            } else {
                this.props.onSubmitValue(this.state.triggerState);
            } 
        });
    }

    render(){
        return (
        <>
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
                    name="isAdult" 
                    checked={this.state.triggerState.includes("isAdult")}
                    onChange={this.handleInputTriggerChange}/>
                18+
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="childAbuse" 
                    checked={this.state.triggerState.includes("childAbuse")}
                    onChange={this.handleInputTriggerChange}/>
                child sex abuse
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="sexualHar" 
                    checked={this.state.triggerState.includes("sexualHar")}
                    onChange={this.handleInputTriggerChange}/>
                sexual harassment
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="sexualAssault" 
                    checked={this.state.triggerState.includes("sexualAssault")}
                    onChange={this.handleInputTriggerChange}/>
                sexual assault or rape
            </label>
        </>
        );
    }
}

export default TriggerForm