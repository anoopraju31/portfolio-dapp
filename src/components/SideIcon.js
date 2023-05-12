import React from 'react'

const SideIcon = ({ title, link, Icon }) => {
	return (
		<a className='group relative' href={link}>
			<div className='w-fit p-1 lg:p-2 rounded-md group-hover:bg-[var(--green-color)] text-white'>
				<Icon size={24} />
			</div>

			<div className='hidden absolute top-[4px] py-1 px-2  bg-[var(--green-color)] left-16 w-[110px] text-white  group-hover:block z-20 before:inline-block  before:content-[""] before:border-t-[8px] before:border-t-transparent before:border-b-[8px] before:border-b-transparent before:border-r-[8px] before:border-r-[var(--green-color)] before:relative before:top-[1px] before:left-[-15px]'>
				<span>{title}</span>
			</div>
		</a>
	)
}

export default SideIcon
