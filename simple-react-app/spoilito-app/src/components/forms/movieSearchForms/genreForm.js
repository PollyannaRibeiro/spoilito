import React from 'react';
import ArrayHelper from '../../../helpers/arrayHelper';

const GenreDefault = "genre-no-preference";

class GenreForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            genreState: [GenreDefault],
        };
        this.handleInputGenresChange = this.handleInputGenresChange.bind(this);
    }

    handleInputGenresChange(event){

        // deselect everything if No Preference is selected
        if (event.target.name == GenreDefault){
            this.setState({
                genreState: [GenreDefault]
            }, function () {
                this.props.onSubmitValue(this.state.genreState);
            });
            return;
        }

        let newArray = [...this.state.genreState]

        if (event.target.checked) {
            newArray.push(event.target.name);
        } else {
            ArrayHelper.remove(event.target.name, newArray);
        }

        if (newArray.length > 1 && newArray.includes(GenreDefault)) {
            ArrayHelper.remove(GenreDefault, newArray);
        } else if (newArray.length == 0) {
            newArray.push(GenreDefault);
        }

        this.setState({
            genreState: newArray
        }, function () {
            this.props.onSubmitValue(this.state.genreState);
        });
    }

    render(){
        return (
        <>
            <br></br>
            Choose the genres:
            <br></br>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-no-preference" 
                    checked={this.state.genreState.includes("genre-no-preference")}
                    onChange={this.handleInputGenresChange}/>
                No preference
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-action" 
                    checked={this.state.genreState.includes("genre-action")}
                    onChange={this.handleInputGenresChange}/>
                action
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-adventure" 
                    checked={this.state.genreState.includes("genre-adventure")}
                    onChange={this.handleInputGenresChange}/>
                adventure
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-animation" 
                    checked={this.state.genreState.includes("genre-animation")}
                    onChange={this.handleInputGenresChange}/>
                animation
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-biography" 
                    checked={this.state.genreState.includes("genre-biography")}
                    onChange={this.handleInputGenresChange}/>
                biography
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-comedy" 
                    checked={this.state.genreState.includes("genre-comedy")}
                    onChange={this.handleInputGenresChange}/>
                comedy
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-documentary" 
                    checked={this.state.genreState.includes("genre-documentary")}
                    onChange={this.handleInputGenresChange}/>
                documentary
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-drama"  
                    checked={this.state.genreState.includes("genre-drama")}
                    onChange={this.handleInputGenresChange}/>
                drama
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-fantasy" 
                    checked={this.state.genreState.includes("genre-fantasy")}
                    onChange={this.handleInputGenresChange}/>
                fantasy
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-historical" 
                    checked={this.state.genreState.includes("genre-historical")}
                    onChange={this.handleInputGenresChange}/>
                historical
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-horror" 
                    checked={this.state.genreState.includes("genre-horror")}
                    onChange={this.handleInputGenresChange}/>
                horror
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-lgbt" 
                    checked={this.state.genreState.includes("genre-lgbt")}
                    onChange={this.handleInputGenresChange}/>
                lgbt+
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-musical" 
                    checked={this.state.genreState.includes("genre-musical")}
                    onChange={this.handleInputGenresChange}/>
                musical
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-mystery" 
                    checked={this.state.genreState.includes("genre-mystery")}
                    onChange={this.handleInputGenresChange}/>
                mystery
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-romance" 
                    checked={this.state.genreState.includes("genre-romance")}
                    onChange={this.handleInputGenresChange}/>
                romance
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-sci-fi" 
                    checked={this.state.genreState.includes("genre-sci-fi")}
                    onChange={this.handleInputGenresChange}/>
                sci-fi
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-thriller" 
                    checked={this.state.genreState.includes("genre-thriller")}
                    onChange={this.handleInputGenresChange}/>
                thriller
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-war" 
                    checked={this.state.genreState.includes("genre-war")}
                    onChange={this.handleInputGenresChange}/>
                war
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="genre-western" 
                    checked={this.state.genreState.includes("genre-western")}
                    onChange={this.handleInputGenresChange}/>
                western
            </label>
            
        </>
        );
    }
}

export default GenreForm 