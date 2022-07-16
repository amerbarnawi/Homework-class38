'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
function createElements() {
  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Show Pokemons';
  button.type = 'button';
  document.body.appendChild(button);

  const selectElement = document.createElement('select');
  selectElement.className = 'select-pokemon';
  document.body.appendChild(selectElement);

  const image = document.createElement('img');
  image.className = 'pokemon-image';
  image.src = 'https://';
  image.alt = '';
  document.body.appendChild(image);
}

function addOptions(pokemonsData) {
  const selectElement = document.querySelector('.select-pokemon');

  pokemonsData.forEach((pokemon) => {
    const option = document.createElement('option');
    option.textContent = pokemon.name;
    option.value = pokemon.url;
    selectElement.appendChild(option);
  });
}

async function fetchData(url) {
  try {
    const responseData = await fetch(url);
    const jsonData = await responseData.json();
    return jsonData;
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons(url) {
  const button = document.querySelector('.button');
  const selectElement = document.querySelector('.select-pokemon');

  try {
    const pokemonsData = await fetchData(url);
    button.addEventListener('click', () => {
      addOptions(pokemonsData.results);

      selectElement.addEventListener('change', (event) => {
        fetchImage(event);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchImage(event) {
  const pokemonImage = document.querySelector('.pokemon-image');
  const selectedPokemonURL = event.target.value;

  try {
    const selectedPokemonData = await fetchData(selectedPokemonURL);

    pokemonImage.src = selectedPokemonData.sprites.front_default;
    pokemonImage.alt = `Pokemon ${selectedPokemonData.name} Image`;
  } catch (error) {
    console.log(error.message);
  }
}

function main() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  createElements();

  fetchAndPopulatePokemons(url);
}

window.addEventListener('load', main);
