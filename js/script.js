/*funcion para añadir peliculas*/
function addMovie(movie){

    const movieList = document.getElementById('movie-list');

    /*si se recarga la pagina que aparesca en blanco la pagina*/
    movieList.innerHTML = "";

    /*recorrer movie para añadir los elementos al DOM*/
    for ( let i = 0; i < movie.length ; i += 1 ) {
        const listItem = document.createElement ('li');

        /*fetch para la informacion extra*/
        movieList.appendChild(listItem);
        fetch(`http://www.omdbapi.com/?apikey=84d40acf&i=${movie[i].imdbID}`)
        .then((response) => response.json())
        .then((data) => {

            /*nuevo contenido añadido al DOM*/
            const content = `
                <h2>${movie[i].Title}</h2>
                <img src="${movie[i].Poster}" alt="${movie[i].Title}">
                <div class="div-accordeon">
                    <button class="botones1" data="${movie[i].imdbID}">SHOW MORE</button>
                    <div class="div-accordeon-content">
                        <p>Actors:${data.Actors}</p>
                        <p>Runtime:${data.Runtime}</p>
                        <p>Metascore:${data.Metascore}</p>
                        <p>Plot:${data.Plot}</p>
                        <p>Year:${data.Year}</p>
                    </div>
                </div>
            `;
            listItem.innerHTML = content;
        });
    }
}

/*funcion para jalar la informacion de la api*/
const input = document.getElementById('form');
input.addEventListener('submit',(event) =>{
    event.preventDefault();
    const inputValue = input.elements[0].value;
    console.log(input);
    fetch(`http://www.omdbapi.com/?apikey=84d40acf&s=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        addMovie(data.Search);
    });
});

let caca = document.querySelectorAll('botones1');
console.log(caca);