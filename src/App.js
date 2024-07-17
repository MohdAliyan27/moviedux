import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  //tooglewatchlist is a function which works as i WANT TO ADD THE movie in watchlist or remove it
  // based on this we can
  const toogleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      //check for previous state if it contains the movieId if it contains removie /filterout if not then add it.
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  watchlist={watchlist}
                  toogleWatchlist={toogleWatchlist}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <WatchList
                  movies={movies}
                  watchlist={watchlist}
                  toogleWatchlist={toogleWatchlist}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
