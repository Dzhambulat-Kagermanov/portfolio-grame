import webpack from 'webpack'
import { buildWebpack } from './config/build/buildConfig'
import path from 'path'
import { IBuildEnv } from 'config/build/types/config'

const config = (env: IBuildEnv): webpack.Configuration => {
	const isProd: boolean = env.mode === 'production'
	const isDev: boolean = !isProd

	return buildWebpack({
		mode: env.mode,
		paths: {
			entry: path.resolve(__dirname, 'src', 'index.tsx'),
			output: path.resolve(__dirname, 'build'),
			html: path.resolve(__dirname, 'public', 'index.html'),
		},
		isDev,
		isProd,
		port: env.port,
	})
}
export default config
