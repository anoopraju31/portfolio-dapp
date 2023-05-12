import { configureStore } from '@reduxjs/toolkit'
import { currentPageReducer } from './reducers'

const store = configureStore({
	reducer: {
		currentPage: currentPageReducer,
	},
})

export default store
