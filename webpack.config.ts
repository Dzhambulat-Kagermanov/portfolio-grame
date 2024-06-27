import webpack from 'webpack'
import path from 'path'
import { buildWebpack } from './config/build/buildConfig'
import { IBuildEnv } from './config/build/types/config'

const config = (env: IBuildEnv): webpack.Configuration => {
  const isProd: boolean = env.mode === 'production'
  const isDev: boolean = !isProd

  return buildWebpack({
    mode: env.mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    isDev,
    isProd,
    port: env.port,
  })
}
export default config
