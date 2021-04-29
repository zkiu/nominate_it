import React, {useState} from 'react'

import defaultImage from '../../assets/images/poster_default.jpg'

export default function SearchResultComp({searchResults}) {
	const [resultPageNum, setResultPageNum] = useState(1)

	let list = searchResults.map((movie) => (
		<li key={movie.imdbID} className="resultList">
			<img
				src={movie.Poster.toLowerCase() !== 'n/a' ? movie.Poster : defaultImage}
				alt="movie poster"
			/>
			<h2>{movie.Title}</h2>
			<p>{movie.Year}</p>
			{/* // TODO: add feature to nominate */}
			<button>Nominate</button>
		</li>
	))
	return (
		<>
			<h1>Pagination</h1>
			<ul className="searchResultContainer">{list}</ul>
		</>
	)
}
