#!/usr/bin/node

const request = require('request');

function printMovieCharacters (movieId) {
  const url = `https://swapi.dev/api/films/${movieId}/`;
  
  request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Unexpected response:', response.statusCode);
    } else {
      const movie = JSON.parse(body);
      console.log(`Characters of ${movie.title}:`);
      movie.characters.forEach((characterUrl) => {
        request.get(characterUrl, (charError, charResponse, charBody) => {
          if (charError) {
            console.error('Error:', charError);
          } else if (charResponse.statusCode !== 200) {
            console.error('Unexpected response:', charResponse.statusCode);
          } else {
            const character = JSON.parse(charBody);
            console.log(character.name);
          }
        });
      });
    }
  });
}

const movieId = 3;
printMovieCharacters(movieId);

