import React from 'react'
import { Wrapper } from '../components'

const Home = () => {
	return (
		<Wrapper>
			<div className='w-full h-full grid gap-0 grid-rows-2 grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:justify-center xl:items-center xl:relative xl:top-[-48px]'>
				<div className='h-full xl:h-[50%] bg-slate-600'></div>
				<div className='h-full xl:h-[50%] bg-slate-800'></div>
			</div>
		</Wrapper>
	)
}

export default Home
