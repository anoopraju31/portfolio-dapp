import React from 'react'
import { AiOutlineHome, AiFillContacts } from 'react-icons/ai'
import { HiCode } from 'react-icons/hi'
import { TbTools } from 'react-icons/tb'
import { BsLinkedin, BsGithub, BsMedium, BsTwitter } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Button } from './'

const NavLink = ({ title, Icon }) => {
	const currentPage = useSelector((state) => state.currentPage)

	return (
		<a className='group flex gap-2 items-center justify-end' href='/'>
			<h1
				className={`group-hover:text-[var(--green-color)] ${
					currentPage === title ? 'text-[var(--green-color)]' : ''
				}`}>
				{' '}
				{title}{' '}
			</h1>
			<div
				className={`p-2 group-hover:bg-[var(--green-color)] rounded-md ${
					currentPage === title ? 'bg-[var(--green-color)]' : ''
				}`}>
				<Icon size={24} />
			</div>
		</a>
	)
}

const SocialLink = ({ link, Icon }) => (
	<a className='hover:text-[var(--green-color)]' href={link}>
		<Icon size={24} />
	</a>
)

const NavMenu = () => {
	return (
		<div className='flex flex-col text-white p-4 gap-2 rounded-xl bg-[var(--navMenu-color)] shadow-[var(--navMenu-shadow)] backdrop-blur-[30px]'>
			<NavLink title='Home' Icon={AiOutlineHome} />
			<NavLink title='About Me' Icon={TbTools} />
			<NavLink title='My Works' Icon={HiCode} />
			<NavLink title='Contact Me' Icon={AiFillContacts} />

			<Button title='Connect To Wallet' isFilled={true} />

			<div className='mt-2 flex gap-4 justify-between'>
				<SocialLink link='https://www.linkedin.com' Icon={BsLinkedin} />
				<SocialLink link='https://www.github.com' Icon={BsGithub} />
				<SocialLink link='https://www.twitter.com' Icon={BsTwitter} />
				<SocialLink link='https://www.medium.com' Icon={BsMedium} />
			</div>
		</div>
	)
}

export default NavMenu
