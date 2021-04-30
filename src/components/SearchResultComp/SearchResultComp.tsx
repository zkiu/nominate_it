import React, {useState} from 'react'
import {Movie} from '../../services/typescript'

import defaultImage from '../../assets/images/poster_default.jpg'

export default function SearchResultComp({
	searchResults,
	addMovie,
	nominatedList,
}) {
	const [resultPageNum, setResultPageNum] = useState(1)
	const nominatedListID = nominatedList.map((movie: Movie) => movie.imdbID)

	let list = searchResults.map((movie: Movie) => (
		<li key={movie.imdbID} className="resultList">
			<img
				src={movie.Poster.toLowerCase() !== 'n/a' ? movie.Poster : defaultImage}
				alt="movie poster"
			/>
			<div className="infoContainer">
				<div className="infoContainerText">
					<h2>{movie.Title}</h2>
					<p>{movie.Year}</p>
				</div>
				<button
					disabled={nominatedListID.includes(movie.imdbID)}
					onClick={(e) => {
						addMovie(movie)
					}}
				>
					Nominate
				</button>
			</div>
		</li>
	))
	return (
		<>
			<h1>Search Results:</h1>
			<h2>Pagination</h2>
			<ul className="searchResultContainer">{list}</ul>
		</>
	)
}
