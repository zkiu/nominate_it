import {useState} from 'react'
import ToastComp from './ToastComp/ToastComp'
import {toast} from 'react-toastify'

import {Movie} from '../services/typescript'

import Header from './Header/Header'
import Banner from './Banner/Banner'
import Search from './Search/Search'
import Nominate from './Nominate/Nominate'

// TODO: delete console & comments, remove unused modules

export default function App() {
	const [nominatedList, setNominatedList] = useState<Movie[]>([])

	const addMovie = (movie: Movie): void => {
		if (nominatedList.length === 5) {
			toast.error('⚠ You can only nominate a maximum of 5 movies')
			return
		}
		if (nominatedList.length === 4) {
			toast.success('🦄 Your top 5 movies are awesome!')
			return
		}
		setNominatedList([...nominatedList, movie])
	}
	const removeMovie = (movie: Movie): void => {
		setNominatedList([
			...nominatedList.filter((item) => item.imdbID !== movie.imdbID),
		])
	}

	return (
		<>
			<Header />
			<main>
				{nominatedList.length === 5 && <Banner nominatedList={nominatedList} />}
				<Search addMovie={addMovie} nominatedList={nominatedList} />
				<Nominate removeMovie={removeMovie} nominatedList={nominatedList} />

				<ToastComp />
			</main>
		</>
	)
}
