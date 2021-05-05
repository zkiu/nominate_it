import {useState} from 'react'

import SearchResultItemComp from '../../components/SearchResultItemComp/SearchResultItemComp'

export default function SearchResultComp({
	searchResults,
	addMovie,
	nominatedList,
}) {
	const [itemFocus, setItemFocus] = useState(null)

	return (
		<div className="searchResultContainer">
			{searchResults.length !== 0 && (
				<>
					<p className="mainHeading">Search Results:</p>
					<ul className="listContainer">
						<SearchResultItemComp
							searchResults={searchResults}
							addMovie={addMovie}
							nominatedList={nominatedList}
							itemFocus={itemFocus}
							setItemFocus={setItemFocus}
						/>
					</ul>
					{searchResults.length > 8 ? (
						<p className="resultMessage">
							Too many results.
							<br />
							Please refine your search query.
						</p>
					) : null}
				</>
			)}
		</div>
	)
}
