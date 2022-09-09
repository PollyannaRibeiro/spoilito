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
        fetch("/movies").then(
            res => res.json()
        ).then(
            data => {
                // this.useState
                // setData(data)
                this.setState({
                    data: data
                });
                console.log(data);
            }
        );
    }

    // get the information from the json
    // useEffect(()=> {
    //     fetch("/movies").then(
    //         res => res.json()
    //     ).then(
    //         data => {
    //             this.useState
    //             setData(data)
    //             console.log(data)
    //         }
    //     )
    // }, [])

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

    // return(
    //     <div>
    //         {(typeof data.movies === 'undefined') ? (
    //             <p>Loading...</p>
    //         ):(
    //             data.movies.map((movie, i) => (
    //                 <p key={i}>{movie}</p>
    //             ))
    //         )}

    //         {(typeof data.members === 'undefined') ? (
    //             <p>Loading...</p>
    //         ):(
    //             data.members.map((member, i) => (
    //                 <p key={i}>{member}</p>
    //             ))
    //         )}
            
    //     </div>
    // )
}

export default GoFlask