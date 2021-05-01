import {useState} from 'react'

import SearchBarComp from '../SearchBarComp/SearchBarComp'
import SearchResultComp from '../SearchResultComp/SearchResultComp'

export default function Search({addMovie, nominatedList}) {
	const [searchResults, setSearchResults] = useState([])
	// ! totalPage is currently not used. For future features.
	const [totalPage, setTotalPage] = useState(1)

	return (
		<section>
			<SearchBarComp
				setSearchResults={setSearchResults}
				setTotalPage={setTotalPage}
			/>
			<SearchResultComp
				searchResults={searchResults}
				addMovie={addMovie}
				nominatedList={nominatedList}
			/>
		</section>
	)
}
