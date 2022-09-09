// https://www.youtube.com/watch?v=7LNl2JlZKHA
// import React, {useState, useEffect} from "react";
import React from 'react';

class GoFlask extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data: [],
        };
    }

    componentDidMount() {
        fetch("/movies?" + new URLSearchParams({
            type: this.props.type,
            genres: this.props.genres,
            triggers: this.props.triggers
        })).then(
            res => res.json()
        ).then(
            data => {
                this.setState({
                    data: data
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
                <p> { item[0] } </p>
            );
        }
    }
    
    render() {
        return <div>
            { this.renderResults() }
        </div>
    }
}

export default GoFlask