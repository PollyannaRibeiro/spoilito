import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/results.scss';
// import Star from '@material-ui/icons/Star';



class Results extends React.Component {

    constructor(props){
        super(props);
        this.state={
        };   
    }

    render(){
        return (
            <>
            <div className='h-100 align-items-center justify-content-center'>
                <div className='row'> 
                    <h1>Results: </h1>
                </div>
                <div className='row'>
                    <div className='col-3 cards-item'>
                        <p>Title</p>
                        <div className='row'>
                            <div className='offset-6 col-2'>
                                <span class="material-icons">star_rate</span>
                            </div>
                            <div className='col-2'>
                                <p className='text-right'>8.7</p>
                            </div>
                        </div>
                        <img src='https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg'
                        alt='equal to title'/>
                    </div>

                    <div className='col-3 cards-item'>
                        <p>Title</p>
                        <div className='row'>
                            <div className='offset-6 col-2'>
                                <span class="material-icons">star_rate</span>
                            </div>
                            <div className='col-2'>
                                <p className='text-right'>8.7</p>
                            </div>
                        </div>
                        <img src='https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
                        alt='equal to title'/>
                    </div>

                    <div className='col-3 cards-item'>
                        <p>Title</p>
                        <div className='row'>
                            <div className='offset-6 col-2'>
                                <span class="material-icons">star_rate</span>
                            </div>
                            <div className='col-2'>
                                <p className='text-right'>8.7</p>
                            </div>
                        </div>
                        <img src='https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg'
                        alt='equal to title'/>
                    </div>

                    <div className='col-3 cards-item'>
                        <p>Title</p>
                        <div className='row'>
                            <div className='offset-6 col-2'>
                                <span class="material-icons">star_rate</span>
                            </div>
                            <div className='col-2'>
                                <p className='text-right'>8.7</p>
                            </div>
                        </div>
                        <img src='https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
                        alt='equal to title'/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default Results