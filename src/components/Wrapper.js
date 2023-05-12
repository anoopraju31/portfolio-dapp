import React from 'react'
import Navbar from './Navbar'

const Wrapper = () => {
	return (
		<div className='w-screen h-screen bg-[var(--wrapper-bg)] relative overflow-hidden'>
			<div className='max-w-[1728px] md:w-[90%] m-auto'>
				<div className='h-[96px] bg-green-400'>
					<Navbar />
				</div>
				<div className='grid grid-cols-12 h-[var(--container-height)]'>
					<div className='hidden md:col-span-1 md:flex bg-slate-600'></div>
					<div className='hidden md:col-span-1 md:flex bg-gray-600'></div>
					<div className='col-span-12 md:col-span-8 bg-white'></div>
					<div className='hidden md:col-span-1 md:flex bg-gray-600'></div>
					<div className='hidden md:col-span-1 md:flex bg-slate-600'></div>
				</div>
			</div>
		</div>
	)
}

export default Wrapper
