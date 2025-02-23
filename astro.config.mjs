// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
	integrations: [
		tailwind(),
		react(),
		icon({
			include: {
				custom: ['linkedin', 'whatsapp'], // Define tu set personalizado
			},
		}),
	],
	vite: {
		resolve: {
			alias: {
				'@': '/src',
				'@components': '/src/components',
			},
		},
	},
	output: 'static',
	build: {
		inlineStylesheets: 'auto',
	},
	server: {
		host: true,
		port: 4321,
	},
});
