const state = {
  currentPage: window.location.pathname,
};

const listPopularMovies = async () => {
  const url = "https://api.themoviedb.org/3/movie/popular";
  const api_key = "d728dd060da3c58acbcb32f115ae60db";

  const response = await fetch(`${url}?api_key=${api_key}`);
  const { results } = await response.json();

  // console.log(results);
  //   console.log(results[0].poster_path);

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("cart");

    const ancher = document.createElement("a");
    ancher.setAttribute("href", `/movie-details.html?id=${movie.id}`);

    // console.log(movie.id);

    const movieImage = document.createElement("img");
    movieImage.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );
    movieImage.setAttribute("alt", `${movie.title}`);

    const divCartBody = document.createElement("div");
    divCartBody.classList.add("card-body");

    const movieTitle = document.createElement("h3");
    movieTitle.classList.add("card-title");
    movieTitle.textContent = `Title: ${movie.title}`;

    const releaseDate = document.createElement("p");
    releaseDate.classList.add("card-text");
    releaseDate.textContent = `Release date: ${movie.release_date}`;

    divCartBody.appendChild(movieTitle);
    divCartBody.appendChild(releaseDate);
    ancher.appendChild(movieImage);
    div.appendChild(ancher);
    div.appendChild(divCartBody);
    document.querySelector("#top-movies").appendChild(div);

    //    console.log(movie.poster_path);
  });
};

const detailsMovie = async () => {
  const url = "https://api.themoviedb.org/3/movie/";
  const api_key = "d728dd060da3c58acbcb32f115ae60db";

  const movieId = window.location.search.split("=")[1];
  // console.log(movieId);

  const response = await fetch(`${url}${movieId}?api_key=${api_key}`);
  const movie = await response.json();
  // console.log(movie);

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="details-top">
            <div>${
              movie.poster_path
                ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                  class="card-img-top" alt="${movie.title}"/>`
                : `img src="../images/no-image.jpg"
                  class="card-img-top" alt="${movie.title}"/>`
            }</div>
            <div>
              <h2>${movie.title}</h2>
              <p>
                <i class="fas fa-star rating"></i>
                ${movie.vote_average.toFixed(1)} / 10
              </p>
              <p class="text-muted">Premiär: ${movie.release_date}</p>
              <p>${movie.overview}</p>
              <h5>Genre</h5>
              <ul>
                ${movie.genres
                  .map((genre) => `<li>${genre.name}</li>`)
                  .join('')}
              </ul>
            </div>
          </div>
  `;

  document.querySelector('#movie-details').appendChild(div);
};

const init = () => {
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

document.addEventListener("DOMContentLoaded", init);
