import {useState} from 'react'
import {Movie} from '../../services/typescript'

import defaultImage from '../../assets/images/poster_default.jpg'

export default function SearchResultComp({
	searchResults,
	addMovie,
	nominatedList,
}) {
	const [resultPageNum, setResultPageNum] = useState(1)
	const nominatedListID = nominatedList.map((movie: Movie) => movie.imdbID)

	let list = searchResults.slice(0, 8).map((movie: Movie) => (
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
			<ul className="searchResultContainer">
				<li className="resultList">
					<p className="resultMessage">Search Results:</p>
				</li>
				{list}
				{searchResults.length > 8 ? (
					<li className="resultList">
						<p className="resultMessage">
							Too many results.
							<br />
							Please refine your search query.
						</p>
					</li>
				) : null}
			</ul>
		</>
	)
}
