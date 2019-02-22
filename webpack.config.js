const webpack = require('webpack');
const path = require('path');

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
             },
             {
                 test: /\.css$/,
                 loader: 'style-loader!css-loader'
             }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
};

