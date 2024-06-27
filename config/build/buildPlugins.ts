import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config'

export const buildPlugins = ({
  paths,
  isProd,
  isDev,
}: IBuildOptions): webpack.WebpackPluginInstance[] => {
  const HTML_WEBPACK_PLUGIN = new HtmlWebpackPlugin({
    template: paths.html,
  })
  const PROGRESS_PLUGIN = new webpack.ProgressPlugin()
  const MINI_CSS_EXTRACT_PLUGIN = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8.css]',
  })
  const DEFINE_PLUGIN = new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(!isProd),
    __IS_PROD__: JSON.stringify(isProd),
  })
  const HOT_MODULE_REPLACEMENT = new webpack.HotModuleReplacementPlugin()

  const plugins: webpack.WebpackPluginInstance[] = [
    HTML_WEBPACK_PLUGIN,
    PROGRESS_PLUGIN,
    DEFINE_PLUGIN,
    HOT_MODULE_REPLACEMENT,
  ]
  if (isDev) {
    // plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(HOT_MODULE_REPLACEMENT)
  }
  if (isProd) {
    plugins.push(MINI_CSS_EXTRACT_PLUGIN)
  }

  return plugins
}
