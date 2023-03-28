const path = require('path')
const htmlwebpackplugin = require("html-webpack-plugin")

module.exports ={
    mode : "development",
  //  entry:path.resolve(__dirname, 'src/index.js'),
  entry :{
    bundle:path.resolve(__dirname, 'src/index.js'),
  },
    output : {
        path :path.resolve(__dirname,'dist'),
       // filename : 'bundle.js'
       filename : '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ], 
            },
            {
                test:/\.svg$/,
                use:"svg-sprite-loader"
            }
        ],
    },
    plugins :[
        new htmlwebpackplugin({
            title:'webpack app',
            filename:"index.html",
            template:"src/template.html"
        })
    ]
}