const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
   entry:path.join(__dirname,'./src/main.js'),
   output:{
      path:path.join(__dirname,'./dist'),
      filename:'bundle.js'
   },
   plugins:[
      new htmlWebpackPlugin({
         template:path.join(__dirname,'./src/index.html'),
         filename:'index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
   ],
   devServer:{
      contentBase:'src',
      hot:true
   },
   module:{
      rules:[
         { test:/\.css$/,use:['style-loader','css-loader'] },
         { test:/\.(jpg|svg|jpeg|gif|png)$/,use:'url-loader:limit=5000&name=[hash:8]-[name].[ext]' },
         { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader' },
         { test:/\.js$/,exclude:/node_modules/,loader:'babel-loader' }
      ]
   }
}