import React, {useState} from 'react'
import ToastComp from './ToastComp/ToastComp'

import Header from './Header/Header'
import Banner from './Banner/Banner'
import Search from './Search/Search'
import Nominate from './Nominate/Nominate'

// TODO: delete console & comments, remove unused modules

export default function App() {
	const [nominatedList, setNominatedList] = useState([])

	return (
		<main>
			<Header />
			<Banner />
			<Search />
			<Nominate />

			<ToastComp />
		</main>
	)
}
