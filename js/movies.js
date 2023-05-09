import fetchDataMovie from "./http.js";
import {displayMovies, movieDetails} from "./dom.js";

const listPopularMovies = async () => {
  const { results } = await fetchDataMovie("movie/popular");
  displayMovies("#top-movies", results);
};

const detailsMovie = async () => {
  const movieId = window.location.search.split("=")[1];
  const movie = await fetchDataMovie(`movie/${movieId}`);
  movieDetails("#movie-details", movie);
};

export { listPopularMovies, detailsMovie };
