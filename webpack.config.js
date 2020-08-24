const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');



const isProd = process.env.NODE_ENV === 'production',
      isDev = !isProd;

const filename = (ext) => isDev ? 'bundle.' + ext : 'bundle.[hash].' + ext ;

const jsLoader = () =>{
  const loaders = 
  [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ] 
  if (isDev) loaders.push('eslint-loader');
}

module.exports = {
   context : path.resolve(__dirname, 'src'),
   mode: 'development',
   entry :['@babel/polyfill', './index.js'],
   output: {
      filename:  filename('js'),
      path: path.resolve(__dirname, "dist"), 
    },
    resolve:{
      extensions:['.js'],
       alias :{
          '@' : path.resolve(__dirname , 'src'),
         ' @core' : path.resolve(__dirname , 'src/core'),
       }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
      port: 3000,
      hot: isDev,
      writeToDisk: true
    },
    plugins:[
      new CleanWebpackPlugin(),
      new CopyPlugin({
         patterns: [
           { 
            from: path.resolve(__dirname, 'src/favicon.ico'),
            to: path.resolve(__dirname, 'dist') 
           }
         ]
       }),
      new HtmlWebpackPlugin({
         template: 'index.html',
         minify: {
          removeComments: isProd,
          collapseWhitespace: isProd
        }
      }),
       new MiniCssExtractPlugin({
         filename: filename('css'),
       }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev,
                reloadAll: true
              },
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
           test: /\.js$/, 
           exclude: /node_modules/, 
           use: jsLoader()
        }
      ],
    },
}