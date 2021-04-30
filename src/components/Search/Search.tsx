import React, {useState, useEffect} from 'react'

import SearchBarComp from '../SearchBarComp/SearchBarComp'
import SearchResultComp from '../SearchResultComp/SearchResultComp'

export default function Search({addMovie}) {
	const [searchResults, setSearchResults] = useState([])
	const [totalPage, setTotalPage] = useState(1)
	// const [resultPage, setResultPage] = useState(1)

	return (
		<section>
			<SearchBarComp
				setSearchResults={setSearchResults}
				setTotalPage={setTotalPage}
				// resultPage={resultPage}
			/>
			<SearchResultComp searchResults={searchResults} addMovie={addMovie} />
		</section>
	)
}
