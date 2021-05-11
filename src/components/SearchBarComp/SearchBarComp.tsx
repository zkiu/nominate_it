import {useState, useEffect} from 'react'
import axios from 'axios'

async function fetchHits(query, dispatch, cancelToken) {
	// taken from https://joaoforja.com/blog/5-steps-to-perform-a-search-when-user-stops-typing-using-react-+-hooks-in-a-controlled-component/
	dispatch({type: 'FETCH_START'})
	try {
		const result = await axios(
			`https://www.omdbapi.com/?apikey=${
				process.env.REACT_APP_OMDB_KEY
			}&s=${encodeURIComponent(query)}&type=movie`,
			{
				cancelToken,
			}
		)
		dispatch({
			type: 'FETCH_SUCCESS',
			payload: result.data.Search,
		})
	} catch (err) {
		console.error(err)
		axios.isCancel(err) || dispatch({type: 'FETCH_FAILURE'})
	}
}

export default function SearchBarComp({dispatch}) {
	const [query, setQuery] = useState('')

	useEffect(() => {
		const {cancel, token} = axios.CancelToken.source()
		const timeOutId = setTimeout(() => fetchHits(query, dispatch, token), 300)
		return () => {
			cancel('No longer latest query')
			clearTimeout(timeOutId)
		}
	}, [query, dispatch])

	return (
		<div className="searchBox">
			<input
				type="text"
				className=""
				autoFocus
				placeholder="Search Movie by Title"
				name="query"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<em>
				NOTE: The whole word is match exactly. Example: A search of 'king' will
				not match titles with the word 'kings', and vice versa.
			</em>
		</div>
	)
}
