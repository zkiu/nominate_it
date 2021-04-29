import React, {useState, useEffect} from 'react'

export default function SearchComp() {
	// const [query, setQuery] = useState('')
	// function handleChange(e) {
	// 	setQuery(e.target.value)
	// }

	function handleSubmitQuery(e) {
		e.preventDefault()
		console.log(e.target.query.value)
	}

	return (
		<form className="searchBox" onSubmit={handleSubmitQuery}>
			<input
				type="text"
				className=""
				placeholder="Search Movie by Title"
				name="query"
				// value={query}
				// onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}
