import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				'app': {
					700: '#242328',
					800: '#1c1b20',
					900: '#161618'
				}
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
