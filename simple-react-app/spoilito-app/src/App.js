import logo from './logo.svg';
import './App.css';
import MovieSearchForm from'./components/forms/MovieSearchForm';
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
            </li>
            <li>
              <Link to="/searchEntertainmentForm">Filter list</Link>
            </li>
          </ul>
        </main>

        <Routes>
          <Route exact path="/searchEntertainmentForm" element={<MovieSearchForm/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
