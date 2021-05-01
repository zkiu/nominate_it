import {useReducer} from 'react'
import {removeDuplicateId} from '../../services/util/removeDuplicateId'

import SearchBarComp from '../SearchBarComp/SearchBarComp'
import SearchResultComp from '../SearchResultComp/SearchResultComp'

function fetchReducer(state, action) {
	// taken from https://joaoforja.com/blog/5-steps-to-perform-a-search-when-user-stops-typing-using-react-+-hooks-in-a-controlled-component/
	switch (action.type) {
		case 'FETCH_START':
			return {
				...state,
				isLoading: true,
				hasError: false,
				hits: [],
			}
		case 'FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				hasError: false,
				hits: action.payload == null ? [] : removeDuplicateId(action.payload),
			}
		case 'FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				hasError: true,
			}
		default:
			throw new Error('Incorrect dispatch issued for querying movies')
	}
}

export default function Search({addMovie, nominatedList}) {
	const [{hits, hasError, isLoading}, dispatch] = useReducer(fetchReducer, {
		hits: [],
		isLoading: true,
		hasError: false,
	})

	return (
		<section>
			<SearchBarComp dispatch={dispatch} />
			{!hasError && (
				<SearchResultComp
					searchResults={hits}
					addMovie={addMovie}
					nominatedList={nominatedList}
				/>
			)}
		</section>
	)
}
