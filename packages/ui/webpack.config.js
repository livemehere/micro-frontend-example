const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules:[
            {
                test:/\.[jt]sx?/,
                use:'esbuild-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new ModuleFederationPlugin({
            name:'ui',
            filename:'remoteEntry.js',
            exposes:{
                './NiceButton': './src/components/NiceButton',
                './NiceInput': './src/components/NiceInput',
            },
        })
    ]
}