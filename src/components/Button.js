import React from 'react'

const Button = ({ title, isFilled }) => {
	return (
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
                 font-medium rounded-lg text-sm px-5 py-2`}>
			{title}
		</button>
	)
}

export default Button
