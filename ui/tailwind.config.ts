import forms from '@tailwindcss/forms';
import daisyui from "daisyui"
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [daisyui, typography, forms]
} satisfies Config;