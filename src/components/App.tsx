import {useState} from 'react'
import {CSSTransition} from 'react-transition-group'
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
		}
		setNominatedList([...nominatedList, movie])
	}
	const removeMovie = (movie: Movie): void => {
		setNominatedList(
			nominatedList.filter((item) => item.imdbID !== movie.imdbID)
		)
	}

	return (
		<>
			<Header />
			<main>
				{/* {nominatedList.length === 5 && <Banner nominatedList={nominatedList} />} */}
				<CSSTransition
					in={nominatedList.length === 5}
					timeout={{
						enter: 800,
						exit: 500,
					}}
					classNames="banner-"
				>
					<Banner nominatedList={nominatedList} />
				</CSSTransition>
				<Nominate removeMovie={removeMovie} nominatedList={nominatedList} />
				<Search addMovie={addMovie} nominatedList={nominatedList} />

				<ToastComp />
			</main>
		</>
	)
}
