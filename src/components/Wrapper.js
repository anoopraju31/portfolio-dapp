import React from 'react'
import { Navbar, PagePointer, Sidebar, Socialbar } from './'

const Wrapper = ({ children }) => {
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
					<div className='hidden xl:col-span-1 xl:flex'></div>
					<div className='col-span-12 md:col-span-10 xl:col-span-8 '>
						{children}
					</div>
					<div className='hidden xl:col-span-1 xl:flex'></div>
					<div className='hidden md:col-span-1 md:flex justify-end items-center'>
						<div className='absolute top-[102px]'>
							<Socialbar />
						</div>
						<div className=' relative top-[-48px]'>
							<PagePointer />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Wrapper
