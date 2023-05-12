import { useCurrentWidth } from '../hooks'
import { Navbar, PagePointer, Sidebar, Socialbar } from './'

const Wrapper = ({ children }) => {
	const currentWidth = useCurrentWidth()
	return (
		<div className=''>
			<div className='w-screen md:w-[90vw] mx-auto relative' id='wrapper'>
				<div className='fixed top-0'>
					<Navbar />
				</div>

				<div className='hidden md:block fixed top-1/2 transform -translate-y-1/2'>
					<Sidebar />
				</div>

				<div className='hidden md:block fixed top-[102px] right-[5%]'>
					<Socialbar />
				</div>

				<div className='hidden md:block fixed top-1/2 right-[5%] tansform -translate-y-1/2'>
					<PagePointer />
				</div>

				<div className=''>{children}</div>
			</div>
		</div>
	)
}

export default Wrapper
