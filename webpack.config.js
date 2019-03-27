const webpack = require('webpack');
const path = require('path');
const S3Plugin = require('webpack-s3-plugin');

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
    },
    plugins: [
        new S3Plugin({
            s3Options: {
              accessKeyId: process.env.AWS_ACCESS_KEY_ID,
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            },
            s3UploadOptions: {
              Bucket: 'kellystern.me'
            }
        })
    ]
};

