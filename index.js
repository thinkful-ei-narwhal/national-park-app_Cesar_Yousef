'use strict';
//key x3nLzhtM5eE1OkfNzSLy9o6BqMsqFOmzhHBWgKro
// api https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=x3nLzhtM5eE1OkfNzSLy9o6BqMsqFOmzhHBWgKro

function watchForm(){
    $('form').submit(event =>{
        event.preventDefault();
        const searchTerm = $('#js-search-term').val().split(' ');
        const maxResults = $('#js-max-results').val();
        getYouTubeVideos(searchTerm, maxResults);
    })
}

function getYouTubeVideos(searchTerm, maxResults) {
    const params = {
        key: 'x3nLzhtM5eE1OkfNzSLy9o6BqMsqFOmzhHBWgKro',
        q: searchTerm,
        part: 'snippet',
        maxResults,
        type: 'video'
      };

      const queryString = formatQueryParams(params)
      const url = searchURL + '?' + queryString;
      
      console.log(url);
      //"https://api.nps.gov/api/v1/parks?stateCode=ca&stateCode=az&limit=10" -H  "accept: application/json"
}


$(watchForm);