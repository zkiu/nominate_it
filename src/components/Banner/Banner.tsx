import {useState} from 'react'
import {Movie} from '../../services/typescript'
import defaultImage from '../../assets/images/poster_default.jpg'

export default function Banner({nominatedList}) {
	let list = nominatedList.map((movie: Movie) => (
		<li key={movie.imdbID} className="slideshow_item">
			<img
				src={movie.Poster.toLowerCase() !== 'n/a' ? movie.Poster : defaultImage}
				alt="movie poster"
			/>
			<div className="infoContainer">
				<h2>{movie.Title}</h2>
				<p>{movie.Year}</p>
			</div>
		</li>
	))

	let slideshow = (
		// animation implementation from https://stackoverflow.com/questions/62092177/infinite-sideways-scroll-animation-of-images
		<div className="slideshow_container">
			<ul className="slideshow_list">{list}</ul>
			<ul className="slideshow_list">{list}</ul>
		</div>
	)

	return (
		<section className="banner">
			<h2 className="banner_heading">Your top 5 picks!</h2>
			{slideshow}
		</section>
	)
}
