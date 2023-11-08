import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			// these are the aliases and paths to them
			$utils: path.resolve('./src/lib/utils')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import 'src/styles/variables.scss';
				`
			}
		}
	}
};

export default config;
