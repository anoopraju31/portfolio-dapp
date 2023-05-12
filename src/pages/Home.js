import React from 'react'
import { Button, Wrapper } from '../components'
import HeaderImg from '../assets/imgs/Photo.png'

const Home = () => {
	return (
		<div className=''>
			<Wrapper>
				<div className='h-screen'>
					<div className='w-[80%] h-screen  mx-auto flex flex-col-reverse lg:flex-row justify-center items-center'>
						<div className='lg:mx-6 xl:mx-0'>
							<h1 className='font-openSans text-white text-center lg:text-left font-bold text-[48px] lg:text-[74px] xl:text-[84px] lg:leading-[90px]'>
								Hi There 👋, <br />
								I'm Anoop Raju{' '}
							</h1>

							<p className='w-[80%] lg:w-full mx-auto text-white text-lg text-center lg:text-left my-6'>
								I’m a frontend developer and loves turning ideas into real
								products is my calling. Currently, focused on Web3 Space.
							</p>
							<div className='w-fit mb-6 mx-auto lg:mx-0'>
								<Button title='Know More About Me' />
							</div>
						</div>
						<div className='mt-10 md:mt-0'>
							<img
								className='w-[200px]  lg:w-[400px] mx-auto xl:mx-0'
								src={HeaderImg}
								alt=''
							/>
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Home
