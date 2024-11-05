'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/main.js',
    home: './src/js/home.js',
    'equipo-medico': './src/js/equipo-medico.js',
    contacto: './src/js/contacto.js',
  },
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  infrastructureLogging: {
    level: 'none',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ 
        template: './src/html/home.html', 
        filename: 'home.html',
        chunks: ['main','home']
      }),
      new HtmlWebpackPlugin({ 
        template: './src/html/equipo-medico.html', 
        filename: 'equipo-medico.html',
        chunks: ['main','equipo-medico']
      }),
      new HtmlWebpackPlugin({ 
        template: './src/html/contacto.html', 
        filename: 'contacto.html',
        chunks: ['main','contacto']
      })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
            'style-loader',
            'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ]
  },
  optimization:{
    minimize: true,
    minimizer: [
      `...`,
    ],
    splitChunks: {
      chunks: 'all',
    }
  }
}