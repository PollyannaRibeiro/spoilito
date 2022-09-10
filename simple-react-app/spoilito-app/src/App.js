import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieGrid from './components/MovieGrid';
import MovieSearchForm from'./components/forms/MovieSearchForm';
import Results from './components/Results';
import LexChatbot from './components/LexChatBot';
import{BrowserRouter as Router,
      Routes,
      Route,
      Link
} from "react-router-dom"

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
        typeValue: [],
        genreValue: [],
        triggerValue: [],
    };
  }

  changeSearchFilter(newType, newGenres, newTriggers ){
    console.log("🤷🏼‍♀️", newType, newGenres, newTriggers);
    this.setState({
      typeValue: newType,
      genreValue: newGenres,
      triggerValue: newTriggers
    });
  }

  changeBotFilters(newType, newGenres, newTriggers) {
    let type = ["movie"];
    let genre = [];
    let trigger = [];

    if (newType != undefined) {
      type = [newType.toLowerCase()]
    }
    if (newGenres != undefined) {
      genre = [newGenres.toLowerCase()];
    }
    
    this.setState({
      typeValue: type,
      genreValue: genre,
      triggerValue: trigger
    });

    console.log("😍", newType, newGenres, newTriggers);
  }

  render(){

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Spoilito
            <p>Welcome to your entertainment assistant</p>
          </header>
          <main>
            <ul>
              <li>
                <Link to="/">Talk with me below</Link>
                <LexChatbot onChangeFilters={this.changeBotFilters.bind(this)}/>
                <MovieSearchForm 
                                typeValue = {this.state.typeValue} 
                                genreValue = {this.state.genreValue}
                                triggerValue = {this.state.triggerValue}
                                onChangeSearch={this.changeSearchFilter.bind(this)}/>
                <MovieGrid 
                          typeValue = {this.state.typeValue} 
                          genreValue = {this.state.genreValue}
                          triggerValue = {this.state.triggerValue}/>
              </li>
              <li>
                <Link to="/searchEntertainmentForm">Filter list</Link>
              </li>
              <li>
                <Link to="/movieGrid">Flask</Link>
              </li>
              <li>
                <Link to="/results">Results</Link>
              </li>
            </ul>
          </main>
  
          <Routes>
            <Route exact 
                    path="/searchEntertainmentForm" 
                    element={
                    <div>
                      <MovieSearchForm 
                                typeValue = {this.state.typeValue} 
                                genreValue = {this.state.genreValue}
                                triggerValue = {this.state.triggerValue}
                                onChangeSearch={this.changeSearchFilter.bind(this)}/>
                      <MovieGrid 
                                typeValue = {this.state.typeValue} 
                                genreValue = {this.state.genreValue}
                                triggerValue = {this.state.triggerValue}/>
                    </div>
                            }/>
            <Route exact 
                    path="/movieGrid" 
                    element={<MovieGrid 
                                typeValue = {this.state.typeValue} 
                                genreValue = {this.state.genreValue}
                                triggerValue = {this.state.triggerValue}/>}/>
            <Route exact path="/results" element={<Results/>}/>
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </div>
      </Router>
    );

  }
  
}

export default App;
