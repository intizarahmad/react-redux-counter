const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports ={
    module:{
        rules:[
            {
                test : /\.(js|jsx)$/,
                exclude:/node_module/,
                use :['babel-loader']
            },
            {
                test: /\.css$/i,
                exclude:/node_module/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
