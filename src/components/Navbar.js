import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'
import Button from './Button'
import { useCurrentWidth } from '../hooks'

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(false)
	const [iconSize, setIconSize] = useState(26)
	const currentWidth = useCurrentWidth()

	useEffect(() => {
		setIconSize(currentWidth > 1920 ? 26 : currentWidth > 768 ? 24 : 22)
	}, [currentWidth])

	return (
		<div className='flex items-center justify-between my-6 px-4 md:px-0'>
			<h2 className='text-[var(--green-color)] z-30 font-[400] text-[24px] md:text-[32px] lg:text-[36px] font-handwriting'>
				Anoop Raju
			</h2>

			<div className='hidden md:block'>
				<Button title='Connect to Wallet' isFilled={false} />
			</div>

			<div
				className=' md:hidden p-2 md:p-3 z-10 text-[var(--green-color)] rounded-full hover:bg-[var(--navbar-hover-color)] '
				onClick={() => setToggleNavbar((prev) => !prev)}>
				{toggleNavbar ? (
					<div className='-z-[9999]'>
						<VscChromeClose size={iconSize} />
					</div>
				) : (
					<div className='-z-[9999]'>
						<GiHamburgerMenu size={iconSize} />
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
