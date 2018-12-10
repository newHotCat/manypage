const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunkName.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    'vue-style-loader',
                    'css-loader', 
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    resolve: { alias: { vue: 'vue/dist/vue.js' } },
    devServer:{
        index:'index.html',
        hot:true,
        contentBase:path.resolve(__dirname, '..','dist'),
        port:3000,
        noInfo:false
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})