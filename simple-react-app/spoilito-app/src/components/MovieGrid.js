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

        console.log("🚀", this.props.typeValue, this.props.genreValue, this.props.triggerValue);

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

    // random and limited to show 48 options per search 
    getRandomItems(arr){
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 48)
    }

    renderResults() {

        if (this.state.data.length == 0) {
            return <div className='empty-search'> <div className='overlayer-color'><h2>A search engine for tracking emotional content and triggers</h2></div> </div>
        } else if(this.state.data.length == 1){
            return <p>Not Found</p>
        }else if(this.state.data.length == 2){
            return <p>Loading...</p>
        }
        else {
            return <div className='h-100 container align-items-center justify-content-center'>
                <div className='row'> 
                    <h1>Results: </h1>
                </div>
                <div className='row'>
                    { this.getRandomItems(this.state.data).map((item) =>
                        <div className='col-3 cards-item' key={item[0]}> 
                            <br/>
                            <p>{item[0]}</p>
                            <div className='row'>
                                <div className='offset-6 col-2'>
                                    <span className="material-icons">star_rate</span>
                                </div>
                                <div className='col-2'>
                                    <p className='text-right'>{item[1]}</p>
                                </div>
                            <img src={item[2]}
                            alt={'Title: ' + item[0]}/>
                            </div>
                        </div>
                    )};
                </div>
            </div>
            
        }
    }
    
    render() {
        return <> 
        <div className='col-9 result-col'>
            { this.renderResults() }
        </div>
        </>
    }
}

export default MovieGrid