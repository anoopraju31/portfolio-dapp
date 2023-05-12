import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import Button from './Button'
import { useCurrentWidth } from '../hooks'
import NavMenu from './NavMenu'

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(false)
	const [iconSize, setIconSize] = useState(26)
	const currentWidth = useCurrentWidth()

	console.log(currentWidth)

	useEffect(() => {
		setIconSize(currentWidth > 1920 ? 26 : currentWidth > 768 ? 24 : 22)
	}, [currentWidth])

	return (
		<div className='w-screen md:w-[90vw] z-50 flex items-center justify-between py-6 px-4 md:px-0 relative'>
			<h2 className='text-[var(--green-color)] z-30 font-[400] text-[24px] md:text-[32px] lg:text-[36px] font-handwriting'>
				Anoop Raju
			</h2>

			<div className='hidden md:block md:mr-2'>
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

			{toggleNavbar && (
				<motion.div
					className='md:hidden absolute right-[1rem]'
					initial={{
						opacity: 0,
						top: 98,
					}}
					animate={{
						opacity: 1,
						top: 58,
					}}
					transition={{ duration: 0.9, ease: 'backOut' }}>
					<NavMenu />
				</motion.div>
			)}
		</div>
	)
}

export default Navbar
