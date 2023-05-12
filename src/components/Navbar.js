import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'
import Button from './Button'

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(false)
	return (
		<div className='flex items-center justify-between my-6'>
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
						<VscChromeClose size={30} />
					</div>
				) : (
					<div className='-z-[9999]'>
						<GiHamburgerMenu size={30} />
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
