import React from 'react'
import { BsLinkedin, BsGithub, BsMedium, BsTwitter } from 'react-icons/bs'

const SocialIcon = ({ link, Icon }) => (
	<div className='p-2 text-white hover:text-[var(--green-color)]'>
		<a href={link}>
			<Icon size={24} />
		</a>
	</div>
)

const Socialbar = () => {
	return (
		<div className=''>
			<SocialIcon link='https://www.linkedin.com' Icon={BsLinkedin} />
			<SocialIcon link='https://www.github.com' Icon={BsGithub} />
			<SocialIcon link='https://www.twitter.com' Icon={BsTwitter} />
			<SocialIcon link='https://www.medium.com' Icon={BsMedium} />
		</div>
	)
}

export default Socialbar
