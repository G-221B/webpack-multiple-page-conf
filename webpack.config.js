const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: resolve(__dirname, './src/pages/index/index.js'),
        about: resolve(__dirname, './src/pages/about/index.js'),
        contact: resolve(__dirname, './src/pages/contact/index.js'),
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, './dist'),
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './public/template/index.html'),
            filename: 'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './public/template/about.html'),
            filename: 'about.html',
            chunks: ['about'],
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './public/template/contact.html'),
            filename: 'contact.html',
            chunks: ['contact'],
        }),
    ],
    devServer: {
        static: {
            directory: resolve(__dirname, './public/template/'),
        },
    }, 
}