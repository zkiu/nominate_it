<h1 align="center">🍿 The Shoppies: Nomitate It!</h1>
<h2 align="center"><a  href="https://nominateit.netlify.app/">Try App</a> </h2>

## Description

This web app lets you search through a movie database, and select 5 movies to nominate as your top favourite of all time!

<p align='center'>A screenshot of the interface:</p>
<p align="center">
<img src="xyz" width="80%"></p>

This app as the main core requirements:

<ol>
<li>Accepts a string query to search through the movie records of the OMDB's API (https://www.omdbapi.com/)</li>
<li>Each search result will display a poster image, movie title, year of release, and a button to nominate that film</li>
<li>Updates to the search string will automatically update the result list</li>
<li>Movies in search results can be added and removed from the nomination list</li>
<li>If a search result has already been nominated, disable its nominate button.</li>
<li>Display a banner when the user has 5 nominations.</li>
</ol>

## The tools

<p align="center">
<img src="xxx" width="50%"></p>

This App is put together with React and styled with SASS.

## Issues Encountered

<ol>
<li>As of 2021/05/01, there are some issues with the OMDB API:
API returns duplicate movies: A search query of ‘king’ returns 2 identical entries (imdbID = tt1972591). This duplication has been addressed in my code, however, my hit list will show less than 10 hits per page.</li>
<li>API only matches whole words: A search query of ‘cool+running’ will not yield the movie Cool Runnings as the ‘s’ is not entered at the end of the query string.</li>
</ol>

## Contact

[LinkedIn](https://www.linkedin.com/in/devkiu/)
😉 I am looking for work
