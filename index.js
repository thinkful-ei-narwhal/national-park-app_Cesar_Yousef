'use strict';
//key x3nLzhtM5eE1OkfNzSLy9o6BqMsqFOmzhHBWgKro
// api https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=x3nLzhtM5eE1OkfNzSLy9o6BqMsqFOmzhHBWgKro

const searchURL = 'https://developer.nps.gov/api/v1/parks';
const apiKey = 'x3nLzhtM5eE1OkfNzSLy9o6BqMsqFOmzhHBWgKro'; 

function watchForm(){
    $('form').submit(event =>{
        event.preventDefault();
        const searchTerm = $('#js-search-term').val().split(' ');
        console.log(searchTerm);
        const maxResults = $('#js-max-results').val();
        getParks(searchTerm, maxResults);
    })
}

function getParks(searchTerm, maxResults) {
    const params = {
        stateCode: searchTerm,
        limit:maxResults,
        api_key: apiKey
      };
      const queryString = formatQueryParams(params)
      const url = searchURL + '?' + queryString;
      
      console.log(url);
      //"https://api.nps.gov/api/v1/parks?stateCode=ca&stateCode=az&limit=10" 
}

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }


$(watchForm);