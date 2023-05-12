/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				navbarBg: 'var(--navbar-bg)',
				navbarBgHover: 'var(--navbar-bg-hover)',
				navbarText: 'var(--navbar-text)',
				navbarTextHover: 'var(--navbar-text-hover)',
				navbarTextBg: 'var(--navbar-text-bg)',
				navbarTextBgHover: 'var(--navbar-text-bg-hover)',
			},
		},
		fontFamily: {
			handwriting: ['Mr De Haviland', 'cursive'],
		},
	},
	plugins: [],
}
