import { ResolveOptions } from 'webpack'
import { IBuildOptions } from './types/config'

export const buildResolve = ({ paths }: IBuildOptions): ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [paths.src, 'node_modules'],
		mainFiles: ['index'],
		preferAbsolute: true,
		alias: {
			'*': paths.src,
		},
	}
}
