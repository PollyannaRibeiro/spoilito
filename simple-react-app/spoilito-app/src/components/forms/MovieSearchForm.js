import React from 'react';

class ArrayHelper {
    static remove(item, array) {
        if (array.includes(item)) {
            let index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
}

const GenreNoPreference = "genre-no-preference";

class MovieSearchForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            typeState: "Any",
            genreState: [GenreNoPreference],
            triggerState: ["Don't Worry with me", ]

        };
        

        this.handleInputTypeChange = this.handleInputTypeChange.bind(this);
        this.handleInputGenresChange = this.handleInputGenresChange.bind(this);
    }

    handleInputTypeChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            typeState: value
        });
    }

    handleInputGenresChange(event){

        let newArray = [...this.state.genreState]

        if (event.target.checked) {
            newArray.push(event.target.name);
        } else {
            ArrayHelper.remove(event.target.name, newArray);

            // let index = newArray.findIndex(function (element){
            //     return element == event.target.name;
            // });
            // newArray.splice(index, 1);
        }

        if (newArray.length > 1 && newArray.includes(GenreNoPreference)) {
            ArrayHelper.remove(GenreNoPreference, newArray);
        } else if (newArray.length == 0) {
            newArray.push(GenreNoPreference);
        }

        this.setState({
            genreState: newArray
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
                            type="checkbox choose-type" 
                            name="type-movie"  
                            checked = {this.state.typeState}
                            onChange = {this.handleInputTypeChange}/>
                        Movie
                    </label>
                    <label>
                        <input type="checkbox choose-type" name="type-tv-show" />
                        TV show
                    </label>
                    <label>
                        <input type="checkbox choose-type" name="type-any" />
                        Any
                    </label>

                    <br></br>
                    Choose the genres:
                    <br></br>
                    <label>
                        <input type="checkbox" 
                        name="genre-no-preference" 
                        checked={this.state.genreState.includes("genre-no-preference")}
                        onChange={this.handleInputGenresChange}/>
                        No preference
                    </label>
                    <label>
                        <input type="checkbox" 
                        name="genre-action" 
                        checked={this.state.genreState.includes("genre-action")}
                        onChange={this.handleInputGenresChange}/>
                        action
                    </label>
                    <label>
                        <input type="checkbox" 
                        name="genre-adventure" 
                        checked={this.state.genreState.includes("genre-adventure")}
                        onChange={this.handleInputGenresChange}/>
                        adventure
                    </label>
                    <label>
                        <input type="checkbox" name="genre-animation" />
                        animation
                    </label>
                    <label>
                        <input type="checkbox" name="genre-biography" />
                        biography
                    </label>
                    <label>
                        <input type="checkbox" name="genre-comedy" />
                        comedy
                    </label>
                    <label>
                        <input type="checkbox" name="genre-documentary" />
                        documentary
                    </label>
                    <label>
                        <input type="checkbox" name="genre-drama" />
                        drama
                    </label>
                    <label>
                        <input type="checkbox" name="genre-fantasy" />
                        fantasy
                    </label>
                    <label>
                        <input type="checkbox" name="genre-historical" />
                        historical
                    </label>
                    <label>
                        <input type="checkbox" name="genre-horror" />
                        horror
                    </label>
                    <label>
                        <input type="checkbox" name="genre-lgbt" />
                        lgbt+
                    </label>
                    <label>
                        <input type="checkbox" name="genre-musical" />
                        musical
                    </label>
                    <label>
                        <input type="checkbox" name="genre-mystery" />
                        mystery
                    </label>
                    <label>
                        <input type="checkbox" name="genre-romance" />
                        romance
                    </label>
                    <label>
                        <input type="checkbox" name="genre-sci-fi" />
                        sci-fi
                    </label>
                    <label>
                        <input type="checkbox" name="genre-thriller" />
                        thriller
                    </label>
                    <label>
                        <input type="checkbox" name="genre-war" />
                        war
                    </label>
                    <label>
                        <input type="checkbox" name="genre-western" />
                        western
                    </label>
                    
                    <br></br>
                    I don't want to watch movies that contain the following triggers:
                    <br></br>
                    <label>
                        <input type="checkbox" name="trigger-None" />
                        Don't Worry with me 
                    </label>
                    <label>
                        <input type="checkbox" name="trigger-adult" />
                        18+
                    </label>
                    <label>
                        <input type="checkbox" name="trigger-child-abuse" />
                        child sex abuse
                    </label>
                    <label>
                        <input type="checkbox" name="trigger-sexual-assault" />
                        sexual assault or rape
                    </label>
                    <label>
                        <input type="checkbox" name="trigger-sexual-assault" />
                        rape or sexual assault
                    </label>
                    
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>

            </div>);
    }
}
export default MovieSearchForm;
