// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	server: {
		allowedHosts: ['jrockwell.dev', 'www.jrockwell.dev', '.ondigitalocean.app'],
	},
});
