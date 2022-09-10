// https://www.youtube.com/watch?v=7LNl2JlZKHA
// import React, {useState, useEffect} from "react";
import { NoEncryption } from '@mui/icons-material';
import React from 'react';
import MovieSearchForm from './forms/MovieSearchForm';

class MovieGrid extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data: []
        };
    }

    componentDidUpdate(prevProps) {

        if (prevProps.typeValue.join(".") === this.props.typeValue.join(".") &&
            prevProps.genreValue.join(".") === this.props.genreValue.join(".")&&
            prevProps.triggerValue.join(".") === this.props.triggerValue.join(".")) {
            return;
        }

        console.log("🤷🏼", this.props.typeValue, this.props.genreValue, this.props.triggerValue);

        let params = new URLSearchParams();
        params.append("type", this.props.typeValue);
        if (this.props.genreValue.length > 0) {
            params.append("genres", this.props.genreValue.join(","));
        }
        if (this.props.triggerValue.length > 0) {
            params.append("triggers", this.props.triggerValue.join(","));
        }
        
        fetch("/movies?" + params).then(
            res => res.json()
        ).then(
            data => {
                this.setState({
                    data: data,
                });
                console.log(data);
            }
        );
    }

    renderResults() {
        if (this.state.data.length == 0) {
            return <p>Loading...</p>
        } else {
            return this.state.data.map ( (item) => 
                <p key={item[0]}> { item[0] } </p>
            );
        }
    }
    
    render() {
        return <div>
            { this.renderResults() }
        </div>
    }
}

export default MovieGrid