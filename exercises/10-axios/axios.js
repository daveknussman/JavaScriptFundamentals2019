// const axios = require('axios');
/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
  */

// identify dropdown
const selectCharacter = document.querySelector('#dropdownCharacter');

// load dropdown
axios({
    url: "https://rickandmortyapi.com/api/character",
    method: "GET",
    headers: {
        "Content-Type": "applictation/json" // e.g.
    },
    body: JSON.stringify({ 
    })
  })
  .then(response => {
      response.data.results.forEach((curValue)=>{
        // could have used a createElement
        selectCharacter.options.add( new Option(curValue.name, curValue.id));
      })
    })  
  .catch(() => {
    });

// proccess dropdown selection 
selectCharacter.addEventListener("input", (e) => {
    // console.log(selectCharacter.value);
    axios({
    url: "https://rickandmortyapi.com/api/character/" + selectCharacter.value,
    method: "GET",
    headers: {
        "Content-Type": "applictation/json" // e.g.
    },
    body: JSON.stringify({ 
    })
  })
  .then(response => {
      const imgRickMorty = document.querySelector('#get-schwifty');
      const txtRickMorty = document.querySelector('#photo-caption');
      imgRickMorty.src = response.data.image;
      txtRickMorty.innerText = response.data.name;
    })  
  .catch(() => {
    });
});