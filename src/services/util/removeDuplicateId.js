export const removeDuplicateId = (arr, secondArr = []) => {
	const combinedSet = [...arr, ...secondArr]

	const listOfID = []
	const newSet = []
	combinedSet.forEach((movie) => {
		if (!listOfID.includes(movie.imdbID)) {
			listOfID.push(movie.imdbID)
			newSet.push(movie)
		}
	})

	return newSet
}
