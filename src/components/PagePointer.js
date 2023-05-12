import React from 'react'
import { useSelector } from 'react-redux'

const Pointer = ({ title }) => {
	const currentPage = useSelector((state) => state.currentPage)
	console.log(currentPage === title)
	return (
		<div
			className={`w-[8px] h-[8px] rounded-full ${
				currentPage === title ? 'bg-[var(--green-color)]' : 'bg-white'
			}`}>
			{' '}
		</div>
	)
}

const PagePointer = () => {
	return (
		<div className='w-[40px] flex flex-col items-center gap-2'>
			<Pointer title='Home' />
			<Pointer title='About Me' />
			<Pointer title='My Works' />
			<Pointer title='Contact Me' />
		</div>
	)
}

export default PagePointer
