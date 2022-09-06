import React from 'react';
import ArrayHelper from '../../helpers/arrayHelper';
import TypeForm from './movieSearchForms/typeForm';
import GenreForm from './movieSearchForms/genreForm';
import TriggerForm from './movieSearchForms/triggerForm';



class MovieSearchForm extends React.Component {

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return (
            <div className="MovieSearchForm">
                <form>
                    
                    <TypeForm />
                    <GenreForm />
                    <TriggerForm />
                    
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>

            </div>);
    }
}
export default MovieSearchForm;
