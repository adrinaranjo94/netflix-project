const downloadMovies = () => {
  let mainSection = document.getElementById("mainSection");
  ["Iron Man", "Spiderman"].forEach((movie) => {
    mainSection.innerHTML += `
    <div class="section">
        <h1>Movies about ${movie}</h1>
        <div class=main__sectionCarousel id="section${movie}">
        </div>
    </div>
    `;

    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`).then(
      async (res) => {
        let response = JSON.parse(await res.text()).Search;
        console.log(response);
        let carouselSection = document.getElementById(`section${movie}`);

        response.forEach((_movie) => {
          let poster =
            _movie.Poster == "N/A"
              ? "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
              : _movie.Poster;
          carouselSection.innerHTML += `
            <div class="main__carouselCard">
                <img src="${poster}" alt="${_movie.Title}">
                <div class="main__carouselText">
                    <h1>${_movie.Title}</h1>
                </div>
            </div>
            `;
        });
      }
    );
  });
};

downloadMovies();
