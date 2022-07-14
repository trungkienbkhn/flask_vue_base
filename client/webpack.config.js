const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = (env, argv) => {
  const copy = {
    patterns: [{ from: 'assets/**/*' }]
  }

  const config = {
    mode: argv.mode,
    target: 'web',
    devtool: argv.mode === 'production' ? false : 'source-map',
    context: path.resolve(__dirname),
    entry: {
      main: './main.ts'
    },
    output: {
      path: path.resolve(__dirname, '../views/dist'),
      filename: '[name].bundle.js',
      pathinfo: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
          use: [{ loader: 'cache-loader' }, { loader: 'babel-loader' }]
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules|vue\/src/,
          use: [
            { loader: 'cache-loader' },
            { loader: 'babel-loader' },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                experimentalWatchApi: true,
                appendTsSuffixTo: [/\.vue$/]
              }
            }
          ]
        },
        {
          test: /.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { url: false } },
            { loader: 'postcss-loader' }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { url: false } },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [path.resolve(__dirname, 'scss/_variables.scss')]
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new Dotenv(),
      new CopyWebpackPlugin(copy),
      new FriendlyErrorsWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
          extensions: {
            vue: true
          }
        }
      })
    ],
    optimization: {
      splitChunks: { name: 'vendor', chunks: 'initial', minChunks: 3 }
    },
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, './'),
        root: path.resolve(__dirname, '../')
      },
      fallback: {
        fs: false,
        path: false
      }
    },
    cache: true,
    stats: {
      modules: false,
      assets: false,
      colors: true
    }
  }

  return config
}
