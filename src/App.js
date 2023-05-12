import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutMe, Home } from './pages'
import { Wrapper } from './components'

const App = () => {
	return (
		<div className='wrapper-bg'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about-me' element={<AboutMe />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
