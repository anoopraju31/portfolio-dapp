import React from 'react'
import { SideIcon } from './'

const Sidebar = () => {
	return (
		<div className='px-2 py-3 bg-[var(--sidebar-bg)] rounded-md md:flex flex-col gap-3'>
			<SideIcon />
		</div>
	)
}

export default Sidebar
