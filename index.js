'use strict';
//key x3nLzhtM5eE1OkfNzSLy9o6BqMsqFOmzhHBWgKro
// api https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=x3nLzhtM5eE1OkfNzSLy9o6BqMsqFOmzhHBWgKro

const searchURL = 'https://developer.nps.gov/api/v1/parks';
const apiKey = 'x3nLzhtM5eE1OkfNzSLy9o6BqMsqFOmzhHBWgKro'; 

function watchForm(){
    $('form').submit(event =>{
        event.preventDefault();
        const searchTerm = $('#js-search-term').val().split(' ').join('&stateCode=');
        const maxResults = $('#js-max-results').val();
        getParks(searchTerm, maxResults);
    })
}

function getParks(searchTerm, maxResults) {
    const params = {
        stateCode: searchTerm,
        limit: maxResults,
        api_key: apiKey
      };

    const queryString = formatQueryParams(params)
    let url = searchURL + '?' + queryString;
    

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => displayResults(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
}

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
    return queryItems.join('&');
  };


function displayResults(responseJson){
    const contentDiplayed=[];
    responseJson.data.forEach(event=>{
        contentDiplayed.push(`
        <li>${event.name}</li>
        <p>${event.description}</p>
        <a href='${event.url}'>Click to visit their site</a>
        `);  
  });
  console.log(contentDiplayed.join(''));

  $('.listResults').html(`${contentDiplayed.join('')}`)
  $('.results').removeClass('hidden');
};

$(watchForm);