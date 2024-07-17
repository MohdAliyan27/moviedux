import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toogleWatchlist }) {
  const [searchMovies, setSearchMovies] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Rating");

  //   useEffect(() => {
  //     // const newMov = ["HOME", "HP", "QWERTY"];
  //     // setMovies(newMov);

  //     fetch("movies.json")
  //       .then((response) => response.json())
  //       .then((data) => setMovies(data));
  //   }, []);

  //Handle Search Change as soon as we type the value is set on to searchMovie
  const handleSearchChange = (e) => {
    setSearchMovies(e.target.value);
  };

  //Handle Genre Change as soon as we type the value is set on to setGenre
  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  //Handle Rating Change as soon as we type the value is set on to setRating
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const filterByGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const filterBySearch = (movie, searchMovieTerm) => {
    return movie.title.toLowerCase().includes(searchMovies.toLowerCase());
  };

  const filterByRating = (movie, rating) => {
    switch (rating) {
      case "All Rating":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      filterByGenre(movie, genre) &&
      filterByRating(movie, rating) &&
      filterBySearch(movie, searchMovies)
  );

  //   const filteredMovies = movies.filter((movie) =>
  //     movie.title.toLowerCase().includes(searchMovies.toLowerCase())
  //   );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies..."
        value={searchMovies}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Action</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All Rating</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            isWatchlisted={watchlist.includes(movie.id)}
            toogleWatchlist={toogleWatchlist}
          />
        ))}
      </div>
    </div>
  );
}
