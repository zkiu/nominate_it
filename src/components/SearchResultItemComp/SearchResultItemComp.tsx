import {Movie} from '../../services/typescript'
import defaultImage from '../../assets/images/poster_default.jpg'

export default function SearchResultItemComp({
	searchResults,
	addMovie,
	nominatedList,
	itemFocus,
	setItemFocus,
}) {
	const nominatedListID = nominatedList.map((movie: Movie) => movie.imdbID)

	const handleClickFocus = (e, id) => {
		setItemFocus(itemFocus === id ? null : id)
	}
	let list = searchResults.map((movie: Movie) => (
		<li
			key={movie.imdbID}
			className={
				movie.imdbID !== itemFocus ? 'resultList' : 'resultList__Extended'
			}
			onClick={(e) => handleClickFocus(e, movie.imdbID)}
		>
			<img
				src={movie.Poster.toLowerCase() !== 'n/a' ? movie.Poster : defaultImage}
				alt="movie poster"
			/>
			<div className="infoContainer">
				<div className="infoContainerText">
					<h2>{movie.Title}</h2>
					<p>{movie.Year}</p>
					{movie.imdbID === itemFocus && <p>Movie Description</p>}
				</div>
				<button
					disabled={nominatedListID.includes(movie.imdbID)}
					onClick={(e) => {
						e.stopPropagation()
						addMovie(movie)
					}}
				>
					Nominate
				</button>
			</div>
		</li>
	))

	return list
}
