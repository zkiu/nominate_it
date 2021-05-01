import {useState, useEffect, useReducer} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import {removeDuplicateId} from '../../services/util/removeDuplicateId'

async function fetchHits(query, dispatch, cancelToken) {
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
			// payload: removeDuplicateId(result.data.Search),
		})
	} catch (err) {
		console.error(err)
		// TODO: rewiew this
		axios.isCancel(err) || dispatch({type: 'FETCH_FAILURE'})
	}
}

export default function SearchBarComp({dispatch}) {
	// export default function SearchBarComp({setSearchResults}) {
	// const [query, setQuery] = useState('')
	// -- search year not yet implemented

	// let timer = null

	// function handleChange(e) {
	// 	clearTimeout(timer)
	// 	setQuery(e.target.value)
	// 	timer = setTimeout(handleSubmitQuery, 500)
	// }

	// function handleKeyDown(e) {
	// 	if (e.keyCode === 13) {
	// 		clearTimeout(this.timer)
	// 		this.triggerChange()
	// 	}
	// }

	// function handleSubmitQuery() {
	// 	let message = document.querySelector('.alertMessage')

	// 	if (query.length === 0) {
	// 		message.innerHTML = null
	// 		setSearchResults([])
	// 		// setTotalPage(1)
	// 		return
	// 	}
	// 	axios
	// 		.get(
	// 			`https://www.omdbapi.com/?apikey=${
	// 				process.env.REACT_APP_OMDB_KEY
	// 			}&s=${query}&type=movie&page=${1}&y=${searchYear}`
	// 		)
	// 		.then(({data}) => {
	// 			if (data.Response === 'False') {
	// 				setSearchResults([])
	// 				// setTotalPage(1)

	// 				if (data.Error === 'Too many results.') {
	// 					message.innerHTML =
	// 						'Too many results. Please refine the search query.'
	// 				}
	// 				if (data.Error === 'Movie not found!') {
	// 					message.innerHTML = 'Movie not found!'
	// 				}
	// 				// toast.error('🛑 ' + data.Error + ' Please change the search')
	// 				// console.log(data.Error)
	// 			} else {
	// 				message.innerHTML = null
	// 				setSearchResults(removeDuplicateId(data.Search))
	// 				// setTotalPage(data.totalResults)
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			toast.error(
	// 				'💀 An error occured while contacting the OMDB movie server 😢'
	// 			)
	// 			console.error(error)
	// 		})
	// }

	const [query, setQuery] = useState('')

	useEffect(() => {
		const {cancel, token} = axios.CancelToken.source()
		const timeOutId = setTimeout(() => fetchHits(query, dispatch, token), 500)
		return () => {
			// TODO: reason this out
			cancel('No longer latest query')
			clearTimeout(timeOutId)
		}
		// return () => cancel('No longer latest query') || clearTimeout(timeOutId)
	}, [query])

	// console.log(hits)
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
				// onKeyDown={handleKeyDown}
			/>
			<p>
				* The whole word is match exactly. Example: A search of 'king' will not
				match titles with the word 'kings'
			</p>
			{/* {hasError && <div>Something went wrong ...</div>}
			{isLoading ? (
				<div>Loading ...</div>
			) : (
				<ul>
					{hits.map((item) => (
						<li key={item.objectID}>
							<a href={item.url}>{item.title}</a>
						</li>
					))}
				</ul>
			)} */}
		</div>
	)
}
