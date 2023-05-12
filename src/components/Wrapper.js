import React from 'react'
import { Navbar, Sidebar, Socialbar } from './'

const Wrapper = () => {
	return (
		<div className='w-screen h-screen bg-[var(--wrapper-bg)] relative overflow-hidden'>
			<div className='max-w-[1728px] md:w-[90%] m-auto'>
				<div className=''>
					<Navbar />
				</div>
				<div className='grid grid-cols-12 h-[var(--container-height)]'>
					<div className='hidden md:col-span-1 md:flex items-center justify-center relative top-[-48px]'>
						<Sidebar />
					</div>
					<div className='hidden md:col-span-1 md:flex bg-gray-600'></div>
					<div className='col-span-12 md:col-span-8 bg-white'></div>
					<div className='hidden md:col-span-1 md:flex bg-gray-600'></div>
					<div className='hidden md:col-span-1 md:flex bg-slate-600'>
						<div className=''>
							<Socialbar />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Wrapper
