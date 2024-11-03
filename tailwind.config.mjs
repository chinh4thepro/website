/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'128': '32rem',
				'256': '64rem',
			},
			screens: {
				'3xl': '1792px',
				'4xl': '2048px'
			},
		},
		
	},
	plugins: [],
}
