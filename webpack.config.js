const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const pageTitle = 'My HTML PAGE';
//
// COMMON
//
const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({ title: 'demo' }),
    ],
  },
  parts.lintJavaScript({ include: PATHS.app }),
  parts.lintCSS({ include: PATHS.app }),
  parts.loadFonts({
    options: {
      // name: '[name].[hash:8].[ext]',
    },
  }),
  // parts.loadJavaScript({ include: PATHS.app }),
  parts.loadTypeScript({ include: PATHS.app }),

]);

//
// PRODUCTION
//

const productionConfig = merge([
  {
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000, // in bytes
    },
    output: {
      chunkFilename: '[name].[chunkhash:8].js',
      filename: '[name].[chunkhash:8].js',
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
    ],
    recordsPath: path.resolve(__dirname, './recordsPath.json'),
  },
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
        safe: true,
      },
    },
  }),
  //parts.generateSourceMaps({ type: 'source-map' }),
  parts.extractCSS({
    use: [{
      loader: 'css-loader',
      options: {
        modules: true,
      },
    }, 'sass-loader', parts.autoprefix()],

  }),
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
  }),
  parts.lintCSS({ include: PATHS.app }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: 'assets/[name].[hash:8].[ext]',
    },
  }),
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ),
    },
    {
      name: 'manifest',
      minChunks: Infinity,
    },
  ]),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production',
  ),
]);

//
// DEVELOPMENT
//

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
    ],
  },
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  // parts.loadCSS({include: PATHS.app}),
  parts.loadCssTypescript({include: PATHS.app}),

  parts.loadFontAwesome({exclude: PATHS.app}),
  parts.loadImages(),
]);


module.exports = (env) => {
  console.log('env', env);
  const pages = [
    parts.page({
      title: pageTitle,
      mobile: false,
      template: require.resolve('./template/default_index.ejs'),
      entry: {
        app: env === 'production' ? PATHS.app :
          [PATHS.app],
      },
      chunks: ['app', 'manifest', 'vendor'],
    }),
  ];
  const config = env === 'production' ?
    productionConfig :
    developmentConfig;

  return merge([commonConfig, config].concat(pages));
};
