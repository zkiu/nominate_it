import React, {useState} from 'react'
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

	const addMovie = (movie: Movie) => {
		if (nominatedList.length === 5) {
			toast.error('⚠ You can only nominate a maximum of 5 movies')
			return
		}
		console.log('before', nominatedList)
		setNominatedList([...nominatedList, movie])
		console.log('after', nominatedList)
	}

	return (
		<main>
			<Header />
			<Banner />
			<Search addMovie={addMovie} />
			<Nominate />

			<ToastComp />
		</main>
	)
}
