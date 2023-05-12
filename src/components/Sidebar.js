import React from 'react'
import { AiOutlineHome, AiFillContacts } from 'react-icons/ai'
import { HiCode } from 'react-icons/hi'
import { TbTools } from 'react-icons/tb'
import { SideIcon } from './'

const Sidebar = () => {
	return (
		<div className='px-2 py-3 bg-[var(--sidebar-bg)] rounded-md md:flex flex-col gap-3'>
			<SideIcon Icon={AiOutlineHome} title='Home' link='/' />
			<SideIcon Icon={TbTools} title='About Me' link='/about-me' />
			<SideIcon Icon={HiCode} title='Works' link='/works' />
			<SideIcon Icon={AiFillContacts} title='Contact Me' link='/contact-me' />
		</div>
	)
}

export default Sidebar
