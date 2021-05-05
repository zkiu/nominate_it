import {useState} from 'react'
import axios from 'axios'

import {Movie} from '../../services/typescript'
import defaultImage from '../../assets/images/poster_default.jpg'

export default function SearchResultItemComp({
	searchResults,
	addMovie,
	nominatedList,
	itemFocus,
	setItemFocus,
}) {
	const [movieDetails, setMovieDetails] = useState({imdbRating: '', Plot: ''})
	const [isLoading, setIsLoading] = useState(true)

	const nominatedListID = nominatedList.map((movie: Movie) => movie.imdbID)

	const handleClickFocus = (e, id) => {
		// setItemFocus(itemFocus === id ? null : id)
		setIsLoading(true)
		if (itemFocus === id) {
			setItemFocus(null)
			return
		} else {
			setItemFocus(id)
			axios
				.get(
					`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${id}`
				)
				.then(({data}) => {
					setMovieDetails({imdbRating: data.imdbRating, Plot: data.Plot})
					setIsLoading(false)
				})
				.catch((err) => console.error(err))
		}
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
					<h2 className="movieTitle">{movie.Title}</h2>
					<p className="movieStat">
						{movie.imdbID === itemFocus ? 'Released:' : null} {movie.Year}
					</p>
					{movie.imdbID === itemFocus &&
						(isLoading === false ? (
							<>
								<p className="movieStat">Rating: {movieDetails.imdbRating}</p>
								<p className="moviePlot">{movieDetails.Plot}</p>
							</>
						) : (
							<p>Loading...</p>
						))}
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
