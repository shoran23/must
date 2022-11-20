const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {HotModuleReplacementPlugin} = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'settings'),
        filename: 'bundle.[contenthash].js',
        publicPath: '',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
                resolve: {
                    extensions: [".js", ".jsx"],
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                type: 'asset',
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 8000
    }
}