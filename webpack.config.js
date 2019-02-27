const webpack = require('webpack');
const path = require('path');
// const CompressionPlugin = require('compression-webpack-plugin');
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
            // Exclude uploading of html
            // exclude: /*/node_modules/*/,
            // s3Options are required
            s3Options: {
              accessKeyId: process.env.AWS_ACCESS_KEY_ID,
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            },
            s3UploadOptions: {
              Bucket: 'react-portfolio-kms'
            }
        })
    //     new CompressionPlugin({
    //         test: /\.(js|.jsx|css)$/,
    //         asset: '[path].gz[query]',
    //         algorithm: 'gzip',
    //         deleteOriginalAssets: true
    //     }),
    //     new S3Plugin({
    //         s3Options: {
    //             accessKeyId: 'your-access-key', // Your AWS access key
    //             secretAccessKey: 'your-secret-key', // Your AWS secret key
    //             region: 'eu-west-1' // The region of your S3 bucket
    //         },
    //         s3UploadOptions: {
    //             Bucket: 'my-bucket', // Your bucket name
    //             // Here we set the Content-Encoding header for all the gzipped files to 'gzip'
    //             ContentEncoding(fileName) {
    //                 if (/\.gz/.test(fileName)) {
    //                     return 'gzip'
    //                 }
    //             },
    //             // Here we set the Content-Type header for the gzipped files to their appropriate values, so the browser can interpret them properly
    //             ContentType(fileName) {
    //                 if (/\.css/.test(fileName)) {
    //                     return 'text/css'
    //                 }
    //                 if (/\.js/.test(fileName)) {
    //                     return 'text/javascript'
    //                 }
    //             }
    //         },
    //         basePath: 'my-dist', // This is the name the uploaded directory will be given
    //         directory: 'public/dist' // This is the directory you want to upload
    //     })
    ]
};

