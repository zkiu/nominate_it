import {Movie} from '../../services/typescript'

import defaultImage from '../../assets/images/poster_default.jpg'

export default function SearchResultComp({
	searchResults,
	addMovie,
	nominatedList,
}) {
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
		<div className="searchResultContainer">
			{searchResults.length !== 0 && (
				<>
					<p className="mainHeading">Search Results:</p>
					<ul className="listContainer">{list}</ul>
					{searchResults.length > 8 ? (
						<p className="resultMessage">
							Too many results.
							<br />
							Please refine your search query.
						</p>
					) : null}
				</>
			)}
		</div>
	)
}
