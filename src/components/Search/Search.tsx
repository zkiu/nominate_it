import React, {useState, useEffect} from 'react'

import SearchBarComp from '../SearchBarComp/SearchBarComp'
import SearchResultComp from '../SearchResultComp/SearchResultComp'

export default function Search({addMovie, nominatedList}) {
	const [searchResults, setSearchResults] = useState([])
	const [totalPage, setTotalPage] = useState(1)

	return (
		<section>
			<SearchBarComp
				setSearchResults={setSearchResults}
				setTotalPage={setTotalPage}
			/>
			{searchResults.length !== 0 && (
				<SearchResultComp
					searchResults={searchResults}
					addMovie={addMovie}
					nominatedList={nominatedList}
				/>
			)}
		</section>
	)
}
