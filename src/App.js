import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { Wrapper } from './components'

const App = () => {
	return (
		<div className='wrapper-bg'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
