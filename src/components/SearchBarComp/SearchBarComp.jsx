import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

export default function SearchBarComp({
	setSearchResults,
	setTotalPage,
	// resultPage,
}) {
	// const [searchResults, setSearchResults] = useState([])
	// const [totalPage, setTotalPage] = useState(1)
	// const [resultPage, setResultPage] = useState(1)
	const [searchYear, setSearchYear] = useState('')

	// set pagination with page number

	function handleSubmitQuery(e) {
		e.preventDefault()
		let title = e.target.query.value
		axios
			.get(
				`http://www.omdbapi.com/?apikey=${
					process.env.REACT_APP_OMDB_KEY
				}&s=${title}&type=movie&page=${1}&y=${searchYear}`
			)
			.then(({data}) => {
				console.log(data)
				console.table(data.Search)

				if (data.Response === 'False') {
					toast.error('🛑 ' + data.Error + ' Please change the search')
				} else {
					setSearchResults(data.Search)
					setTotalPage(data.totalResults)
				}
			})
	}

	return (
		<form className="searchBox" onSubmit={handleSubmitQuery}>
			<input
				type="text"
				className=""
				placeholder="Search Movie by Title"
				name="query"
			/>
			<button type="submit">Submit</button>
		</form>
	)
}
