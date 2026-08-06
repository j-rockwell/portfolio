// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jrockwell.dev',
	server: {
		allowedHosts: ['jrockwell.dev', 'www.jrockwell.dev', '.ondigitalocean.app'],
	},
});
