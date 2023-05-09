import state from "./state.js";
import { listPopularMovies, detailsMovie } from "./movies.js";

const route = () => {
  switch (state.currentPage) {
    case "/":
    case "/index.html":
      listPopularMovies();
      break;
    case "/movie-details.html":
      detailsMovie();
      break;
  }
};

export default route;

// document.addEventListener("DOMContentLoaded", route);
