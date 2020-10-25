const path =require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
    entry:'./src/index.ts',
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module : {
        rules: [
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]

            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js','.scss'],
    },
    devServer: {
        contentBase: ['./'],
        watchContentBase:true,
        open:true,
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};