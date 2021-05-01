import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

import {removeDuplicateId} from '../../services/util/removeDuplicateId'

export default function SearchBarComp(
	{setSearchResults, setTotalPage} // resultPage,
) {
	// const [searchResults, setSearchResults] = useState([])
	// const [totalPage, setTotalPage] = useState(1)
	// const [resultPage, setResultPage] = useState(1)
	// -- search year not yet implemented
	const [searchYear, setSearchYear] = useState('')

	// set pagination with page number

	function handleSubmitQuery(e) {
		e.preventDefault()
		let title = e.target.query.value
		if (title.length === 0) {
			toast.info('Please enter a search text first')
			setSearchResults([])
			setTotalPage(1)
			return
		}
		axios
			.get(
				`http://www.omdbapi.com/?apikey=${
					process.env.REACT_APP_OMDB_KEY
				}&s=${title}&type=movie&page=${1}&y=${searchYear}`
			)
			.then(({data}) => {
				if (data.Response === 'False') {
					toast.error('🛑 ' + data.Error + ' Please change the search')
				} else {
					setSearchResults(removeDuplicateId(data.Search))
					setTotalPage(data.totalResults)
				}
			})
			.catch((error) => {
				toast.error(
					'💀 An error occured while contacting the OMDB movie server 😢'
				)
				console.error(error)
			})
	}

	return (
		<form className="searchBox" onSubmit={handleSubmitQuery}>
			<input
				type="text"
				className=""
				autoFocus
				placeholder="Search Movie by Title"
				name="query"
			/>
			<button type="submit">Submit</button>
		</form>
	)
}
