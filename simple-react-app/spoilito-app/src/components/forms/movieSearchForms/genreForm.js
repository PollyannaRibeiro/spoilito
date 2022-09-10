import React from 'react';
import ArrayHelper from '../../../helpers/arrayHelper';

const GenreDefault = "no-preference";

class GenreForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            genreState: [GenreDefault],
        };
        this.handleInputGenresChange = this.handleInputGenresChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        console.log("🥶", this.props.genreState);

        if (prevProps.genreState === this.props.genreState ||
            prevProps.genreState.join(".") === this.props.genreState.join(".")) {
            return;
        }

        console.log("🥶🥶", this.props.genreState);


        this.setState({
            genreState: this.props.genreState
        });
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
                    name="no-preference" 
                    checked={this.state.genreState.includes("no-preference")}
                    onChange={this.handleInputGenresChange}/>
                No preference
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="action" 
                    checked={this.state.genreState.includes("action")}
                    onChange={this.handleInputGenresChange}/>
                action
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="adventure" 
                    checked={this.state.genreState.includes("adventure")}
                    onChange={this.handleInputGenresChange}/>
                adventure
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="animation" 
                    checked={this.state.genreState.includes("animation")}
                    onChange={this.handleInputGenresChange}/>
                animation
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="biography" 
                    checked={this.state.genreState.includes("biography")}
                    onChange={this.handleInputGenresChange}/>
                biography
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="comedy" 
                    checked={this.state.genreState.includes("comedy")}
                    onChange={this.handleInputGenresChange}/>
                comedy
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="documentary" 
                    checked={this.state.genreState.includes("documentary")}
                    onChange={this.handleInputGenresChange}/>
                documentary
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="drama"  
                    checked={this.state.genreState.includes("drama")}
                    onChange={this.handleInputGenresChange}/>
                drama
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="fantasy" 
                    checked={this.state.genreState.includes("fantasy")}
                    onChange={this.handleInputGenresChange}/>
                fantasy
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="historical" 
                    checked={this.state.genreState.includes("historical")}
                    onChange={this.handleInputGenresChange}/>
                historical
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="horror" 
                    checked={this.state.genreState.includes("horror")}
                    onChange={this.handleInputGenresChange}/>
                horror
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="lgbt" 
                    checked={this.state.genreState.includes("lgbt")}
                    onChange={this.handleInputGenresChange}/>
                lgbt+
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="musical" 
                    checked={this.state.genreState.includes("musical")}
                    onChange={this.handleInputGenresChange}/>
                musical
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="mystery" 
                    checked={this.state.genreState.includes("mystery")}
                    onChange={this.handleInputGenresChange}/>
                mystery
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="romance" 
                    checked={this.state.genreState.includes("romance")}
                    onChange={this.handleInputGenresChange}/>
                romance
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="scifi" 
                    checked={this.state.genreState.includes("scifi")}
                    onChange={this.handleInputGenresChange}/>
                sci-fi
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="thriller" 
                    checked={this.state.genreState.includes("thriller")}
                    onChange={this.handleInputGenresChange}/>
                thriller
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="war" 
                    checked={this.state.genreState.includes("war")}
                    onChange={this.handleInputGenresChange}/>
                war
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="western" 
                    checked={this.state.genreState.includes("western")}
                    onChange={this.handleInputGenresChange}/>
                western
            </label>
            
        </>
        );
    }
}

export default GenreForm 