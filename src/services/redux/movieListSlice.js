import {createSlice} from '@reduxjs/toolkit'

export const movieListSlice = createSlice({
	name: 'movieList',
	initialState: {
		value: [{movie: 'x-men', id: 'zyx'}],
	},
	reducers: {
		addMovie: (state, action) => {
			state.value.push(action.payload)
		},
	},
})

export const {addMovie} = movieListSlice.actions

export const selectMovieList = (state) => state.movieList.value

export default movieListSlice.reducer
