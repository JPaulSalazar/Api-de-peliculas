/* funcion para añadir peliculas */
function addMovie(movie) {
  const movieList = document.getElementById('movie-list');
  /* si se recarga la pagina que aparesca en blanco la pagina */
  movieList.innerHTML = '';
  /* recorrer movie para añadir los elementos al DOM */
  for (let i = 0; i < movie.length; i += 1) {
    const listItem = document.createElement('li');
    /* fetch para la informacion extra */
    movieList.appendChild(listItem);
    /* nuevo contenido añadido al DOM */
    fetch(`http://www.omdbapi.com/?apikey=84d40acf&i=${movie[i].imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        const content = `
        <h2>${movie[i].Title}</h2>
        <div class="img">
          <img src="${movie[i].Poster}" alt="${movie[i].Title}">
        </div>
        <div class="div-accordeon">
            <button class="acordeon">SHOW MORE</button>
            <div class="info">
                <p>Actors:${data.Actors}</p>
                <p>Runtime:${data.Runtime}</p>
                <p>Metascore:${data.Metascore}</p>
                <p>Plot:${data.Plot}</p>
                <p>Year:${data.Year}</p>
            </div>
        </div>
        `;
        /* acordeon */
        listItem.innerHTML = content;
        const acordeon = document.querySelectorAll('.acordeon');
        acordeon[i].addEventListener('click', (event) => {
          event.preventDefault();
          const elemento = event.currentTarget;
          const info = elemento.nextElementSibling;
          if (info.style.display === 'block') {
            info.style.display = 'none';
          } else {
            info.style.display = 'block';
          }
        });
      });
  }
}

/* funcion para cargar mas */
const buttonMore = document.getElementById('more');
function more(a) {
  let index = 1;
  buttonMore.addEventListener('click', () => {
    index += 1;
    fetch(`http://www.omdbapi.com/?apikey=84d40acf&s=${a}/&page=${index}`)
      .then((response) => response.json())
      .then((data) => {
        addMovie(data.Search);
      });
  });
}

/* funcion para jalar la informacion de la api */
const input = document.getElementById('form');
input.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = input.elements[0].value;
  fetch(`http://www.omdbapi.com/?apikey=84d40acf&s=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      addMovie(data.Search);
      more(inputValue);
    });
});
