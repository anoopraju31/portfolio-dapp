import React from 'react'
import { redirect } from 'react-router-dom'

const Button = ({ title, isFilled, link }) => {
	const handleClick = () => {
		if (link !== undefined) {
			redirect(link)
		}
	}
	return (
		<>
			{link ? (
				<a
					href={link}
					className={`${
						isFilled
							? 'text-navbarTextBg hover:text-navbarTextBgHover'
							: 'text-navbarText hover:text-navbarTextHover'
					} border-2 border-navbarBg hover:border-navbarBgHover
		${isFilled ? `bg-navbarBg hover:bg-transparent` : 'hover:bg-navbarBgHover'} 
			 font-medium rounded-lg text-sm px-5 py-2`}>
					{title}{' '}
				</a>
			) : (
				<button
					type='button'
					className={`${
						isFilled
							? 'text-navbarTextBg hover:text-navbarTextBgHover'
							: 'text-navbarText hover:text-navbarTextHover'
					} border-2 border-navbarBg hover:border-navbarBgHover
            ${
							isFilled
								? `bg-navbarBg hover:bg-transparent`
								: 'hover:bg-navbarBgHover'
						} 
                 font-medium rounded-lg text-sm px-5 py-2`}
					onClick={handleClick}>
					{title}
				</button>
			)}
		</>
	)
}

export default Button
