import React from 'react';
import ArrayHelper from '../../../helpers/arrayHelper';

const TypeDefault = "type-any";

class TypeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            typeState: [TypeDefault]
        };
        
        this.handleInputTypeChange = this.handleInputTypeChange.bind(this);
    }

    handleInputTypeChange(event){
        let newTypeArray = [...this.state.typeState]

        if (event.target.checked) {
            newTypeArray.push(event.target.name);
        } else {
            ArrayHelper.remove(event.target.name, newTypeArray);
        }

        // remove fist element of an array 
        if (newTypeArray.length > 1) {
           newTypeArray.shift();
        } else if (newTypeArray.length == 0) {
            newTypeArray.push(TypeDefault);
        }

        this.setState({
            typeState: newTypeArray
        }, function () {
            this.props.onSubmitValue(this.state.typeState);
        });

        
    }

    render(){
        return (
        <>
            <br></br>
            Choose the Type:
            <br></br>
            <label>
                <input 
                    type="checkbox" 
                    name="type-movie"  
                    checked = {this.state.typeState.includes("type-movie")}
                    onChange = {this.handleInputTypeChange}/>
                Movie
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="type-tv-show" 
                    checked = {this.state.typeState.includes("type-tv-show")}
                    onChange = {this.handleInputTypeChange}/>
                TV show
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="type-any" 
                    checked = {this.state.typeState.includes("type-any")}
                    onChange = {this.handleInputTypeChange}/>
                Any
            </label>
        </>
        );
    }
}

export default TypeForm