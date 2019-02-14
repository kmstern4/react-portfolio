const webpack = require('webpack');
const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        publicPath: '/',
        contentBase: './public',
        hot: true
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react', '@babel/env']
                }
             }
        ]
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         hash: true,
    //         filename: 'index.html',
    //         template: 'public/index.html'
    //     })
    // ]
};

