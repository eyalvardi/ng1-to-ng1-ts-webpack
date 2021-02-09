const path = require("path");
const {
  CleanPlugin,
  DefinePlugin,   
} = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const SizePlugin = require('size-plugin');

const HtmlWebpackPlugin     = require('html-webpack-plugin');
const HtmlMinimizerPlugin   = require("html-minimizer-webpack-plugin");
const PreloadWebpackPlugin  = require('@alesmenzel/preload-webpack-plugin');
const PreloadWebpackPlugin2 = require('@vue/preload-webpack-plugin');

module.exports = {
  name   : "ng1tong2",
  mode   : 'development',  
  devtool: "source-map",
  entry: {   
    'main' :   "./app/main.ts"        
  },
  output: {
    filename   : "ng1-to-ng2/[name].bundle.js",
    path       : path.resolve(__dirname, "./dist/apollo"),
    publicPath : 'http://localhost:8080/apollo/',
  },
  devServer: {
    publicPath : '/apollo/',
    port: 8080,
    //open: true,
    openPage: 'apollo/ng1-to-ng2',
  },
  optimization: {
    minimize: false,
    minimizer : [
      '...',
      new HtmlMinimizerPlugin(),
    ],
    chunkIds: 'named',
    mergeDuplicateChunks: true,
    runtimeChunk :{
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader : "ts-loader",
          options: {
            transpileOnly: true
          }
        },
       
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
      new CleanPlugin(),
      //new SizePlugin(),
      new DefinePlugin({
        PRODUCTION: JSON.stringify(true),
      }),
      new ModuleFederationPlugin({
        name   : "apollo",
        library: { type: "var", name: "apollo" },
        remotes: {
          todo: "todo",
        },
        //shared : ['angular']
      }),
      new HtmlWebpackPlugin({
        template : "./app/index.html",
        filename : "ng1-to-ng2/index.html",
        excludeChunks  : [
          'todo/todo.module'
        ]
      })
    ],
};
