import {useState} from 'react'
import {Movie} from '../../services/typescript'
import defaultImage from '../../assets/images/poster_default.jpg'

export default function Banner({nominatedList}) {
	let list = nominatedList.map((movie: Movie) => (
		<li key={movie.imdbID} className="">
			<img
				src={movie.Poster.toLowerCase() !== 'n/a' ? movie.Poster : defaultImage}
				alt="movie poster"
			/>
			<div className="">
				<div className="">
					<h2>{movie.Title}</h2>
					<p>{movie.Year}</p>
				</div>
			</div>
		</li>
	))

	return (
		<section className="banner">
			<h2>Your top 5 picks!</h2>
			<ul className="bannerList">{list}</ul>
		</section>
	)
}
