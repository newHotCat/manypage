const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common')


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    },
    resolve: { alias: { vue: 'vue/dist/vue.min.js' } },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    optimization:{
        runtimeChunk:{
            name:'./js/runtime'
        },
        splitChunks:{
            // 避免过度分割，设置尺寸不小于30kb
            //cacheGroups会继承这个值
            minSize:30000,
            cacheGroups:{
                //vue相关框架
                main:{
                    test: /[\\/]node_modules[\\/]vue[\\/]/,
                    name: './js/main',
                    chunks:'all'
                },
                //除Vue之外其他框架
                vendors:{
                    test:/[\\/]node_modules[\\/]?!(vue)[\\/]/,
                    name: './js/vendors',
                    chunks:'all'
                },
                //业务中可复用的js
                extractedJS:{
                    test:/[\\/]src[\\/].+\.js$/,
                    name:'./js/extractedJS',
                    chunks:'all'
                }
                
            }
        }
    },
    plugins:[
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..')
        }),
        new MiniCssExtractPlugin({
            filename:'./css/[id].[contenthash].css'
        }),
        //优化缓存
        new webpack.HashedModuleIdsPlugin()
    ]
})