# webpack
安装 cnpm i -D

具体新建方法：
1.新建一个文件夹，使用VSCode打开
2.在终端中，输入 npm init -y (这种为文件名不包含汉字)
3.在根目录下床架dist和src文件夹，并在src中创建index.html 、main.js
4.安装webpack :cnpm i webpack -D
5.安装webpack-dev-server :cnpm i webpack-dev-server -D
在，
(1)package.json的scripts中添加：
"start": "webpack-dev-server",
"dev": "webpack-dev-server --mode development",
"build": "webpack --mode production",
(2)在文件根目录下创建webpack.config.js文件，
 const path = require
 module.exports = {
  entry:path.join(__dirname,'./src/main.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  }
 }
在webpack.config.js中
a.引入webpack
const webpack = require('webpack')

b.plugins:[
  new webpack.HotModuleReplacementPlugin()
]
c.devServer:{
  contentBase:'src',
  hot:true,
}
6、安装html-webpack-plugin:cnpm i html-webpack-plugin 
a.在webpack.config.js中引入：
const htmlWebpackPlugin = require('html-webpack-plugin')

b.plugins:[
 new htmlWebpackPlugin({
 //指定模板页面，将会会根据指定的页面路径生成内存中的页面
  template:path.join(__dirname,'./src/index.html'),
  filename:'inedx.html'
 })
 
 7.第三方样式引入
 css,引入：cnpm i style-loader css-loader -D
 图片引入：cnpm i url-loader file-loader -D

在webpack.config.js中module.exports下创建一个
module:{
  rules:[
    { test:'/\.css$/',use:['style-loader','css-loader']},
    { test:'/\.(png|jpg|jpeg|svg|gif)$/',use:['file-loader']},
    //字体图标
    { test:'/\.(eot|svg|ttf|woff|woff2})$/',use:['url-loader']}
  ]
}
]
8.babel的配置，此处我没有添加babel-core,因为添加了总是会报错，
cnpm i babel-loader babel-plugin-transform -runtime -D
cnpm i babel-preset-env babel-preset-stage-0 -D

a.在webpack.config.js中的配置，
{ test:/\.js$/,use:'babel-loader',exclude:/node_modules/ }

b.在根目录下新建一个.babelrc的文件，配置如下：
{
  "presets":["env","stage-0"],
  "plugins":["transform-runtime']
}
