import React, {useState, useEffect} from 'react';
import ArrayHelper from '../../helpers/arrayHelper';
import TypeForm from './movieSearchForms/typeForm';
import GenreForm from './movieSearchForms/genreForm';
import TriggerForm from './movieSearchForms/triggerForm';


const TypeDefault = "movie";
const GenreDefault = "no-preference";
const TriggerDefault =  "trigger-none";

class MovieSearchForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            typeValue: [TypeDefault],
            genreValue: [GenreDefault],
            triggerValue: [TriggerDefault]
        };

        this.handleTypeChanges = this.handleTypeChanges.bind(this);
        this.handleGenreChanges = this.handleGenreChanges.bind(this);
        this.handleTriggerChanges = this.handleTriggerChanges.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // how it will be passed to the query
    componentDidUpdate(prevProps) {
        if (prevProps.typeValue.join(".") === this.props.typeValue.join(".") &&
            prevProps.genreValue.join(".") === this.props.genreValue.join(".")&&
            prevProps.triggerValue.join(".") === this.props.triggerValue.join(".")) {
            return;
        }

        this.setState({
            typeValue: this.props.typeValue,
            genreValue: this.props.genreValue,
            triggerValue: this.props.triggerValue,
        });
    }


    handleTypeChanges(event){

        let typeArray = []
        typeArray.push(event);

        this.setState({
            typeValue: typeArray
        });
    }

    handleGenreChanges(event){

        // let genreArray = []
        // genreArray.push(event);

        this.setState({
            genreValue: event
        });
    }

    handleTriggerChanges(event){

        // let triggerArray = []
        // triggerArray.push(event);

        this.setState({
            triggerValue: event
        });
    }

    handleSubmit(event){
        console.log("form submitted: " + this.state.typeValue);
        console.log("form submitted: " + this.state.genreValue);
        console.log("form submitted: " + this.state.triggerValue);

        event.preventDefault();

        this.props.onChangeSearch(this.state.typeValue, this.state.genreValue, this.state.triggerValue);
    }



    render(){
        return (
            <div className="MovieSearchForm">
                <form onSubmit={this.handleSubmit}>
                    
                    <TypeForm onSubmitValue={this.handleTypeChanges}/>
                    <GenreForm genreState={this.state.genreValue} onSubmitValue={this.handleGenreChanges}/>
                    <TriggerForm triggerState={this.state.triggerValue} onSubmitValue={this.handleTriggerChanges} />
                    
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>

            </div>);
    }
}
export default MovieSearchForm;
