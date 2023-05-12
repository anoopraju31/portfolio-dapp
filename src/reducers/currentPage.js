import { createSlice } from '@reduxjs/toolkit'

const currentPageSlice = createSlice({
	name: 'currentPage',
	initialState: 'Home',
	reducers: {
		setCurrentPage: (state, action) => {
			const { pageName } = action.payload
			state = pageName
		},
	},
})

export const { setCurrentPage } = currentPageSlice.actions
export default currentPageSlice.reducer
