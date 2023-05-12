import React from 'react'
import Button from './Button'

const Navbar = () => {
	return (
		<div className='flex items-center justify-between my-6 px-4'>
			<h2 className='text-[var(--green-color)] z-30 font-[400] text-[24px] md:text-[32px] lg:text-[36px] font-handwriting'>
				Anoop Raju
			</h2>

			<Button />
		</div>
	)
}

export default Navbar
