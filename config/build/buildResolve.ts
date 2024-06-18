import { ResolveOptions } from 'webpack'
import { IBuildOptions } from './types/config'

export const buildResolve = (options: IBuildOptions): ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
	}
}
