import {Movie} from '../../services/typescript'

export default function Nominate({nominatedList, removeMovie}) {
	const list = nominatedList.map((movie: Movie, i: number) => (
		<li key={movie.imdbID} className="item">
			{/* <div className=""> */}
			<p>{`${i + 1}. `}</p>
			<h3>{movie.Title}</h3>
			<p>{movie.Year}</p>
			<button
				onClick={(e) => {
					removeMovie(movie)
				}}
			>
				Remove
			</button>
			{/* </div> */}
		</li>
	))
	return (
		<section className="nominations">
			<h2>Nominate 5 movies:</h2>
			{nominatedList.length === 0 ? (
				<em className="emptyListMessage">No movies nominated yet</em>
			) : (
				<ul className="nominationContainer">{list}</ul>
			)}
		</section>
	)
}
