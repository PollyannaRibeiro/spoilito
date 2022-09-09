import logo from './logo.svg';
import './App.css';
import GoFlask from './components/GoFlask';
import MovieSearchForm from'./components/forms/MovieSearchForm';
import Results from './components/Results';
import LexChatbot from './components/LexChatBot';
import{BrowserRouter as Router,
      Routes,
      Route,
      Link
} from "react-router-dom"

function App() {
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
              <LexChatbot />
            </li>
            <li>
              <Link to="/searchEntertainmentForm">Filter list</Link>
            </li>
            <li>
              <Link to="/goFlask">Flask</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
          </ul>
        </main>

        <Routes>
          <Route exact path="/searchEntertainmentForm" element={<MovieSearchForm/>}/>
          <Route exact path="/goFlask" element={<GoFlask type="movie" genres="comedy,drama" triggers="isAdult"/>}/>
          <Route exact path="/results" element={<Results/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
