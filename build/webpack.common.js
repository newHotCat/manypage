const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const devMode = process.env.NODE_ENV !== 'production'

const entryList = [
    'page1',
    'page2'
]

/**
 * 创建入口文件
 * 
 * @param {any} [list=[]] 
 * @param {any} [option={}] 可选 手动配置的内容
 */
const createEntry = (list = [], option = {}) => {
    const obj = {}
    list.forEach(item => {
        const name = item.filename ? `./js/${item.filename}` : `./js/${item}`
        obj[name] = path.resolve(__dirname ,'../src', `./${name}.js`)
    });
    return Object.assign(obj, option)
}

/**
 * 每个html需要一个插件实例
 * 批量生成html文件
 * @param {any} [list=[]] 
 */
const createPluginInstance = (list = []) => (
    list.map((item) => {
        return new HtmlWebpackPlugin({
            filename: item.filename ? `${item.filename}.html` : `${item}.html`,
            template: item.template ? `./public/${item.template}` :  './public/template.html',
            title: item.title ? item.title : item,
            chunks: [
                `./js/${item.filename ? item.filename : item}`,
                './js/extractedJS',
                './js/vendors',
                './js/main',
                './js/runtime',
                './css/styles.css',
                devMode ? './css/[id].css' : './css/[id].[contenthash].css',
            ],
        });
    })
);

module.exports = {
    entry: createEntry(entryList),
    output: {
        path: path.resolve(__dirname, '..','dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'public/fonts/[name].[ext]',
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'public/images/[name].[ext]',
                    }
                }
            }
        ]
    },
    plugins:  createPluginInstance(entryList).concat([
        // vue SFCs单文件支持
        new VueLoaderPlugin(),
    ])
}