import React, {useState} from 'react'

export default function SearchResultComp({searchResults}) {
	const [resultPageNum, setResultPageNum] = useState(1)

	let list = searchResults.map((movie) => (
		<li key={movie.imdbID} className="resultList">
			<img src={movie.Poster} alt="movie poster" />
			<h2>{movie.Title}</h2>
			<p>{movie.Year}</p>
		</li>
	))
	return (
		<>
			<h1>Pagination</h1>
			<ul className="searchResultContainer">{list}</ul>
		</>
	)
}
