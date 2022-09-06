import React from 'react';

class ArrayHelper {
    static remove(item, array) {
        if (array.includes(item)) {
            let index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
}

const TypeDefault = "type-any";
const GenreDefault = "genre-no-preference";
const TriggerDefault =  "trigger-none";


class MovieSearchForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            typeState: [TypeDefault],
            genreState: [GenreDefault
],
            triggerState: [TriggerDefault ]

        };
        

        this.handleInputTypeChange = this.handleInputTypeChange.bind(this);
        this.handleInputGenresChange = this.handleInputGenresChange.bind(this);
        this.handleInputTriggerChange = this.handleInputTriggerChange.bind(this);

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
        });
    }

    handleInputGenresChange(event){

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
        });
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
