const movieDetails = (element, movie) => {
    const div = document.createElement("div");
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
            .join("")}
        </ul>
      </div>
    </div>
  `;
    document.querySelector(element).appendChild(div);
  };
  
  const displayMovies = (element, movies) => {
    movies.forEach((movie) => {
      const div = document.createElement("div");
      div.classList.add("cart");
  
      const ancher = document.createElement("a");
      ancher.setAttribute("href", `/movie-details.html?id=${movie.id}`);
  
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
  
      document.querySelector(element).appendChild(div);
    });
  };

  export {displayMovies, movieDetails};
  