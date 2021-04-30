import React, {useState} from 'react'
import {Movie} from '../../services/typescript'

export default function Nominate({nominatedList, removeMovie}) {
	const list = nominatedList.map((movie: Movie, i: number) => (
		<li key={movie.imdbID} className="">
			<div className="">
				<p>{`${i}. `}</p>
				<h2>{movie.Title}</h2>
				<p>{movie.Year}</p>
				<button
					onClick={(e) => {
						removeMovie(movie)
					}}
				>
					Remove
				</button>
			</div>
		</li>
	))
	return (
		<section>
			<h2>Your Nomination List:</h2>
			{nominatedList.length === 0 ? (
				<h3>No movies nominated yet</h3>
			) : (
				<ul className="nominationContainer">{list}</ul>
			)}
		</section>
	)
}