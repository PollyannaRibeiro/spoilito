import React from 'react';
import ArrayHelper from '../../../helpers/arrayHelper';

const TypeDefault = "movie";

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
                    name="movie"  
                    checked = {this.state.typeState.includes("movie")}
                    onChange = {this.handleInputTypeChange}/>
                Movie
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="TV show" 
                    checked = {this.state.typeState.includes("TV show")}
                    onChange = {this.handleInputTypeChange}/>
                TV show
            </label>
        </>
        );
    }
}

export default TypeForm