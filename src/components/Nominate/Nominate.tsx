import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {useState} from 'react'
import {Movie} from '../../services/typescript'

export default function Nominate({nominatedList, removeMovie}) {
	const [nominationStatus, setNominationStatus] = useState(
		nominatedList.length === 0
	)
	const list = nominatedList.map((movie: Movie, i: number) => (
		<CSSTransition
			key={`listItem-${movie.imdbID}`}
			timeout={{
				enter: 800,
				exit: 500,
			}}
			classNames="item-animation-"
		>
			<li key={movie.imdbID} className="item">
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
			</li>
		</CSSTransition>
	))
	return (
		<section className="nominations">
			<h2>Nominate 5 movies:</h2>

			{nominationStatus && (
				<em className="emptyListMessage">No movies nominated yet</em>
			)}
			<CSSTransition
				in={nominatedList.length !== 0}
				timeout={{
					enter: 800,
					exit: 500,
				}}
				classNames="item-animation-"
				unmountOnExit={true}
				mountOnEnter={true}
				onExited={() => {
					setNominationStatus(true)
				}}
				onEnter={() => {
					setNominationStatus(false)
				}}
			>
				<ol className="nominationContainer">
					<TransitionGroup component={null}>{list}</TransitionGroup>
				</ol>
			</CSSTransition>
		</section>
	)
}
