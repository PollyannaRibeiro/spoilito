import React from 'react';
import ArrayHelper from '../../helpers/arrayHelper';
import TypeForm from './movieSearchForms/typeForm';
import GenreForm from './movieSearchForms/genreForm';
import TriggerForm from './movieSearchForms/triggerForm';


const TypeDefault = "type-any";
const GenreDefault = "genre-no-preference";
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


    handleTypeChanges(event){

        let typeArray = []
        typeArray.push(event);

        this.setState({
            typeValue: typeArray
        });
    }

    handleGenreChanges(event){

        let genreArray = []
        genreArray.push(event);

        this.setState({
            genreValue: genreArray
        });
    }

    handleTriggerChanges(event){

        let triggerArray = []
        triggerArray.push(event);

        this.setState({
            triggerValue: triggerArray
        });
    }

    handleSubmit(event){
        console.log("form submitted: " + this.state.typeValue);
        console.log("form submitted: " + this.state.genreValue);
        console.log("form submitted: " + this.state.triggerValue);

        event.preventDefault();
    }

    render(){
        return (
            <div className="MovieSearchForm">
                <form onSubmit={this.handleSubmit}>
                    
                    <TypeForm onSubmitValue={this.handleTypeChanges}/>
                    <GenreForm onSubmitValue={this.handleGenreChanges}/>
                    <TriggerForm onSubmitValue={this.handleTriggerChanges} />
                    
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>

            </div>);
    }
}
export default MovieSearchForm;
