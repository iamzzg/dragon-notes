## webpack的安装
安装本地的webpack,版本最好指定一个大版本，不然会报很多由于版本不一样的错误。
webpack  打包工具
webpack-cli 能在cmd输入npx webpack打包等命令
webpack-dev-server 开启一个开发服务器，使用express，可用于代理，实时更新打包的文件。

> - cnpm i webpack@4 webpack-cli@3 webpack-dev-server@3 -D

## webpack可以进行0配置
- 打包工具 -> 输出后的结果(js模块)
- 打包（支持我们的js的模块化）
- npx webpack 执行打包，如果默认式以生产模式打包，即会压缩优化代码
>```js
 - npm run build -- --config webpack.dev.js  给webpack传参，要加--
>```
## 通过package.json配置启动打包脚本
- 默认的配置文件名字：webpack.config.js
- npx webpack --config webpack.config.my.js 指定配置的文件名，不用默认的名字
- 在package.json里面配置script脚本，然后就可以用npm run build
> ````js
> "scripts": {
    "build": "webpack --config webpack.config.js",//这里的--config webpack.config.js就是指定配置文件
    "dev": "webpack-dev-server"
  },
> ````

## 安装webpack-dev-server，
开发服务器，将打包后的结果写入内存而不是真正打包,自动编译并打包
- cnpm i webpack-dev-server -D
- cmd里启动：npx webpack-dev-server
- 将编译脚本配置到package.json,然后就可以用npm run dev
````js
"script":{
    "dev":"webpack-dev-server"
}

配置文件里
devServer: {
        hot:true,//热更新
        port: 3000,//服务器启动的端口
        open:true,//命令启动完自动打开浏览器
        progress: true, //显示进度条
        contentBase: './build', //指定静态服务器的文件夹
        compress: true, //启动压缩
    },

````

## webpack基本配置
- webpack不用loader，只能打包js
```js
//webpack.config.js
let path = require('path')
module.exports = {
    mode: 'development',//'development'开发模式，不压缩代码、'production'默认压缩js，如果配置了optimization则要自己配置压缩js的插件
    entry: './src/index.js',//入口文件，'./src/index.js'是路径，一个字符串表示是单入口，构建spa，多入口则是一个对象
    output: {//指定打包输出文件文件和名字
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        // publicPath:'http://localhost:3000'//给所有打包引入的资源路径前面加一个公共路径
    }
}

```

## 安装html-webpack-plugin插件
该插件可以根据index.html这个模板，来将打包后的js自动插入到这个index.html中
- cnpm view html-webpack-plugin versions 查看npm服务器上插件版本，选择对应版本下载
- cnpm i  html-webpack-plugin@4.5.2 安装指定版本的插件
````js
"script":{
    "dev":"webpack-dev-server"
}

配置文件里
let HtmlWebpackPlugin = require('html-webpack-plugin')
devServer: {
        hot:true,//热更新
        port: 3000,//服务器启动的端口
        open:true,//命令启动完自动打开浏览器
        progress: true, //显示进度条
        contentBase: './build', //指定静态服务器的文件夹
        compress: true, //启动压缩
    },
plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',//找到html模板，在这里将打包后的js插入进入
            filename: 'index.html',//打包后的html文件名，
            hash: true//这是给js文件名加上hash戳，类似<script src="bundle.js?9b91b492d9a39df182dc"></script>
        })
    ],

````

## 打包处理css样式
webpack本身只能处理js，对于其他类型的文件诸如css，图片等，需要通过响应的loader和plugin来处理
对于loader的处理顺序是从右到左，从下到上。
有关的loader和插件如下：
- style-loader,将解析后的css以style标签的形式插入到head标签中
- css-loader,解析在js或者css中@import语法
- postcss,postcss-loader,autoprefixer,给css属性添加浏览器前缀
- less，less-loader,css预处理器
- mini-css-extract-plugin,抽离成单独的css文件,这个代替style-loader的位置
- optimize-css-assets-webpack-plugin,压缩css文件

## 安装css-loader,style-loader
css-loader负责解析在js或者css中@import语法，style-loader负责将解析后的css以style标签的形式插入到head标签中。
- cnpm i css-loader style-loader -D 
```js
module: { //处理模块的规则
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
```

## 安装less，less-loader
css预处理器，需安装less和less-loader
- cnpm i less less-loader -D 
```js
module.exports = {
    module:{
        rules:[
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader' //less->css
                ]
            }
        ]
    }
}
```

## 安装postcss,postcss-loader,autoprefixer
给css属性添加浏览器前缀
- cnpm i postcss postcss-loader,autoprefixer -D
````js
module.exports = {
    plugins:[
        require('autoprefixer')()
    ]//另外需要在package.json中添加一个"browserslist"字段说明哪些浏览器需要加
}

package.json中添加
  "browserslist":[
    "defaults",
    "not ie <11",
    ">1%",
    "IOS 7",
    "last 3 IOS versions"
]
````

## 安装mini-css-extract-plugin 将处理后的css抽离成单独的css文件，不以style的形式插入html，而是以link的形式引入
- cnpm i mini-css-extract-plugin -D
这个代替style-loader的位置
```js
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({//抽离单独css
            filename: 'main.css',
        })
    ],
    module:{
        rules:[
            {
                test: /\.less$/,
                use: [
                    'MiniCssExtractPlugin.loader'
                    'css-loader',
                    'postcss-loader',
                    'less-loader' //less->css
                ]
            }
        ]
    }
}
```

## 安装 optimize-css-assets-webpack-plugin 来自动压缩css文件
- cnpm i optimize-css-assets-webpack-plugin -D webpack4的插件
```js
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    optimization: { //优化项
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin()//使用了css压缩之后，js也要自己引入插件来压缩
        ]
    }
}
```

## 安装css-minimizer-webpack-plugin webpack5的
这个插件用在optimization优化选项中，必须在mode是production的情况下才会压缩
- cnpm i css-minimizer-webpack-plugin -D
````js
optimization: { //优化项
        minimizer: [
            new CssMinimizerWebpackPlugin()
        ]
    }
````

## 压缩js，转换es6语法，检验语法规范，暴露第三方模块给全局变量
对应loader，插件如下有关
- uglifyjs-webpack-plugin
- babel-loader,@babel/core @babel/preset-env
- @babel/plugin-proposal-class-properties
- @babel/plugin-proposal-decorators
- @babel/plugin-transform-runtime
- @babel/runtime
- @babel/polyfill
- eslint eslint-loader
- expose-loader,
- webpack.ProviePlugin 内置插件

## 安装uglifyjs-webpack-plugin
使用了css压缩之后，js也要自己引入插件来压缩
- cnpm i uglifyjs-webpack-plugin -D
```js
let UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
optimization: { //优化项
        minimizer: [
            new UglifyjsWebpackPlugin({
                cache: true,//开启缓存
                parallel: true,//并行压缩
                sourceMap: true //保存源码
            })
        ]
    },
```

## babel已经可以转换generator，promise,includes也是，这里可以不用单独配置插件或者loader了，
如果是mode是开发环境，那么不会走优化项，也就是压缩js和css那些。
- cnpm i babel-loader @babel/core @babel/preset-env -D
- cnpm i @babel/plugin-proposal-class-properties -D 来解析类语法
- cnpm i @babel/plugin-proposal-class-properties -D 来解析 @log(decorators-legacy)这种语法 
- cnpm i --save-dev @babel/plugin-transform-runtime  //使用诸如'foo'.includes('o') 的语法，这个在开发用
- cnpm i --save @babel/runtime  //这个在生产用，用--save,这个上线也用得到
- @babel/polyfill 补丁，给新的api转换成es5

```js
module: { //处理模块的规则
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include:path.resolve(__dirname,'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env' //预设
                        ],
                        "plugins": [
                            ["@babel/plugin-proposal-decorators", {
                                "legacy": true
                            }],
                            ["@babel/plugin-proposal-class-properties", {
                                "loose": true
                            },],
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                }
            }
        ]
    },
```

## 安装eslint eslint-loader 
检查语法，从eslint中下载一个配置文件，命名为.eslintrc.json文件，放在根目录下，在webpack.config.js中配置，用于根据设定的语法规则检验代码风格，一般开发过程如果设置了，那么不符合风格则会报错。
-cnpm i eslint eslint-loader -D
````js
{
                test:/\.js$/,
                use:{
                    loader:'eslint-loader',
                    options:{
                        enforce:'pre'//previous post,pre表示强制在rules数组最前面,那么对js的语法检验会在最后面进行
                    }
                },
            },
````

## 安装第三方模块的问题，将第三方模块名称暴露给全局对象，使用expose-loader 
不同版本对应的webpack版本也不一样，1版本对应webpack4，用法有
在webpack.config.js里面配置
- cnpm i expose-loader@1 --save-dev
- cnpm i jquery 
````js
{
                test: require.resolve('jquery'), //引入jqeury时，暴漏到全局对象中
                loader: 'expose-loader', //expose-loader 版本1的写法
                options: {
                    exposes: ["$", "jQuery"]
                }
            }
````
## 将第三方模块注入所有的模块的更好的解决办法，webpack.ProviePlugin()或者直接在index.html中通过script标签引入cdn的第三方库就行
````js
let webpack = require('webpack')
new webpack.ProvidePlugin({//将jquery库的别名设置为$，所有模块都可以直接使用
            $:'jquery'
        })

 externals:{//属性名是模块名称，右边属性值是引入时的变量名，这里表示如果模块中有引入这个第三方模块，最后不打包，一般用于第三方库是通过cdn来引入的,排除打包模块
    jquery:'$'
}
````

## 总结 引入第三方包的三种方式
- 1 expose-loader
- 2 全局注入模块，webpack.ProvidePlugin
- 3 引入cdn，通过externals设置不打包


## 在webpack中打包图片
安装file-loader
配置
>````js
>{
>                test:/\.(png|jgp|gif)$/,
>                use:{
>                    loader:'file-loader',
>                    options:{
>                        esModule:false//解决问题file-loader版本过高导致css中引入图片打包后路径出现[object Module]，
>                    }
>                },
>                
>            },
>````
- 1 在js中创建图片引入,import或者require
file-loader默认会生成一张图片到打包的目录下，然后把生成的图片的名字返回回来

>````js
>//1 在js中创建图片引入
>//file-loader默认会生成一张图片到打包的目录下，然后把生成的图片的名字返回回来
>import logo from './logo.png'//对于普通import的图片，logo是个字符串，不会打包
>let img = new Image()
>console.log(logo);
>img.src = logo//普通字符串，并不会打包
>document.body.appendChild(img)
>````
- 2 在css中，可以直接像普通的css一样引入，css-loader会自动打包
background: url('./logo.png');

- 3 直接在打包前的html通过img标签引入，问题：
>````js
><img src="./logo.png" alt="">这个相对路径在打包的文件夹了并没有这个路径，所以找不到
>解决办法：使用 html-withimg-loader，解决在html中打包图片
>cnpm i html-withimg-loader -D
>````

## 安装url-loader
url-loader封装了file-loader，一般使用url-loader来加载图片，当图片小于多少K时，采用dataURL的方式返回，否则才像file-loader一样打包图片
base64b不用在发请求，但是大小比原来大了3分之1
````js
output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        // publicPath:'http://localhost:3000'//给所有打包引入的资源路径前面加一个公共路径
    },
 {
                test:/\.(png|jgp|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        //当图片小于多少k时，用base64来转化，否则用file-loader来产生真正的图片
                        limit:10*1024,
                        esModule:false,//解决css中引入图片[object Module]的问题
                        outputPath:'img/',//将图片放到这个目录下
                        publicPath:'http://www.baidu.com'//这个只给图片添加公共路径，这种方式可以给指定资源类型添加cdn
                    }
                },
                
            },
````

## 安装html-withimg-loader
将index.html里的图片路径也进行打包
cnpm i html-withimg-loader -D
````js
{
    test:/\.html$/,
    use:'html-withimg-loader'
}
````

## 打包文件的分类，例如css打包在哪里文件夹里，图片打包在哪里
```js
//css
new MiniCssExtractPlugin({ //将css-loader处理后的css抽离出单独的文件，叫main.css，如果这里设置多个类实例，那么就会有抽离出多个css文件，
            filename: 'css/main.css',//这里如果文件名包含"/"，那么会自动生成目录

}),

//图片地址
output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        // publicPath:'http://localhost:3000'//给所有打包引入的资源路径前面加一个公共路径
    },

//打包后的图片目录
{
                test:/\.(png|jgp|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        //当图片小于多少k时，用base64来转化，否则用file-loader来产生真正的图片
                        limit:10*1024,
                        esModule:false,//解决css中引入图片[object Module]的问题
                        outputPath:'/img/',//将图片放到这个目录下
                        publicPath:'http://www.baidu.com'//这个只给图片添加公共路径，这种方式可以给指定资源类型添加cdn
                    }
                },

```

## 打包多页应用
```js
//d多入口，对象形式
    entry:{
        home:'./src/index.js',//home入口
        other:'./src/other.js'//other入口
    },
    output:{
        //多出口，[name]，home，other
        filename:'[name].js',//[name].[hash].js也可以
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        //这里要new两个插件对象出来，代表通过html模板生成两个html
        //这样，就可以生成多个页面的应用，然后多个页面引用不同的js代码块
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'home.html',//生成之后的文件名，
            chunks:['home']//引入home入口对应打包的js
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'other.html',
            chunks:['other']//chunks数组表示要引入的js代码块文件
        })
    ],
```

## devtool字段配置source-map
帮助调试代码，找到出错位置。
```js
    //1 源码映射，单独生成一个sourcemap文件，出错会标识出错的列和行,大而全
    devtool:"source-map",//增加映射文件，帮我们调试代码
    //2 不产生单独的sourcemap文件，但是可以显示行和列
    devtool:"eval-source-map",
    //3 不会产生列，但会产生一个单独的文件
    devtool:'cheap-module-source-map',//可以保存起来调试
    //4 不会产生文件，集成在打包后的文件中，不会产生列(报错的信息列)
     devtool:'cheap-module-eval-source-map',
```

## watch的用法
watch实时监控代码编译打包,不是和webpack-dev-server一样，是执行完npm run build之后，
```js
    watch:true,//监控代码，实时编译，执行完npm run build之后不会立马结束，发现有代码变化则立马自动打包
    watchOptions:{//监控的选项
        poll:1000,//每秒 问我 1000次
        aggregateTimeout:500,//防抖，我一直输入代码，500ms
        ignored:/node_module/,//不需要进行监控的文件，node_module下面的文件
    },
```

## webpack一些小插件的应用
// 一些小插件的应用
// 1) cleanWebpackPlugin 在打包前先清空打包的目录文件夹下的内容
// 2) copyWebpackPlugin 将指定目录的文件复制一份到打包后的目录里
// 3) bannerWebpackPlugin 内置插件，将版权声明等信息自动添加在打包后的js文件顶部
```js
let webpack = require('webpack')
let {CleanWebpackPlugin} = require('clean-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')


    plugins:[
        new webpack.ProgressPlugin(),//显示打包进度条
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
        }),
        new CleanWebpackPlugin(),//打包前清空目的文件夹里的内容
        new CopyWebpackPlugin([
            {from:'./doc',to:'./'}
        ]),
        new webpack.BannerPlugin('made by zzg @2021-7-24')
    ],
```

## webpack在开发利用webpack-dev-server来处理跨域问题
- devServer配置代理
- 配置模拟接口
- 前后端同个端口

```js
    devServer:{
        // 1) 配置代理
        // proxy:{//配置开发服务器代理，
        //     '/api':{
        //         target:'http://localhost:3000',//将对开发服务器的以api开头的请求代理到目标ip
        //         pathRewrite:{'/api':''}//，并重写路由
        //     }
        // }

        // 2) 前端只单纯模拟写数据，利用webpack-dev-server里的express来书写模拟数据
        // before(app){//before提供的钩子，app就是express()后那个对象
        //     app.get('/api/user',(req,res)=>{
        //         res.json({msg:'mock data'})
        //     })
        // }

        // 3) 后端和前端启动在同一个端口，也就是，在后端express服务器上，利用webpack-dev-middleware中间件打包，然后启动服务器，
    }
```
## resovle字段，指定解析第三方依赖的方式
查找路径，扩展名，别名
```js
    resolve:{//解析第三方包，指定去哪个路径下找，
        modules:[path.resolve('node_modules')],
        extensions:['.js','.css','.json']//表示省略后缀时，依次查找的后缀名称
        // mainFields:['style','main'],//表示在第三方包里，使用简短的名称引入时，首先根据style字段来引入(这时时css)，再就是通过main字段（这时是js）,
        // mainFiles:[]//打包入口文件的名字，默认就是index.js
        // alias:{//别名，将具体路径简化一些短的名称，方便引入
        //     bootstrap:'bootstrap/dist/css/bootstrap.css'
        // }
    }
```

## 定义环境变量
```js
plugins:[
        new webpack.DefinePlugin({//定义环境变量
            DEV:JSON.stringify('production'),//DEV在js中引用的变量的值是'production'字符串，引号里的内容
            FLAG:'true',
            expression:JSON.stringify('1+1')
        }),
        new webpack.ProgressPlugin(),//显示打包进度条
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
        }),
    ],
```
接着就可以在js代码中使用这些环境变量，以区分不同环境下代码的处理
```js
import './style'
let url = ''
if(DEV){
url = 'dev'
}else{
    url = 'prod'
}
```
## 生产环境和开发环境下的webpack配置文件
- webpack.base.js  公共的配置
- webpack.dev.js  开发环境的配置
- webpack.prod.js  生产环境的配置
- webpack-merge  提供一个merge方法合并配置项
在项目打包时，通过npm run build -- --config webapck.dev.js来指定配置文件来打包
```js
//webpack.dev.js开发环境配置
let {merge} = require('webpack-merge')//合并webpack公共配置文件和不同环境配置文件,现在是merge方法了

let base = require('./webpack.base')

module.exports = merge(base,{
    mode:'development'
})

//webpack.prod.js开发环境配置
let {merge} = require('webpack-merge')

let base = require('./webpack.base')

module.exports = merge(base,{
    mode:'production'
})
```

## 打包的一些优化项
- noParse，不分析指定的库的依赖，
- ignoredPlugin,忽略第三方依赖中又去require的依赖，不去打包它，例如第三方包中的语言包
- webpack.DllPlugin,用于将指定模块打包成librayry时指定动态链接库生成的名字和位置，
- webpack.DllReferencePlugin,通过manifest.json指定动态链接库的的位置
比如，有一个基本不变化的第三方模块，引入时没有必要每次都都去打包，因为他的内容几乎不变，那么就要打包成一个单独的动态链接库js（和打包的jsbundle.js不一样），通过index.html的<script src="/_dll_react.js"></script>引入，然后再js模块中还能继续import使用的。
```js
先利用这个配置文件打包dll
//webpack.config.react.js
//将react,react-dom制作成dll的配置
let path = require('path')
let webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        react: ['react','react-dom'],
    },
    output: {
        filename: '_dll_[name].js',//打包成的library名称
        path: path.resolve(__dirname, 'dist'),
        library: '_dll_[name]',//将这个出口文件打包成单独library，动态链接库，并赋值给ab全局变量，之后在html中用script标签引入，打包时就不再对这个模块进行打包了。要求与_dll_[name]一致_dll_react
        libraryTarget: 'var'//导出时的模块用什么规范，默认是var(通过script标签)，也可是commonjs（通过require）,umd,
    },
    plugins:[
        new webpack.DllPlugin({//name == library
            name:'_dll_[name]',
            path:path.resolve(__dirname,'dist','manifest.json')//manifest.json用户清单，对应了相应的模块
        })
    ]
}
```
```js
//webpack根据这种配置文件引用dll
//webpack.config.js
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')

//优化的地方，
//noParse，不分析指定的库的依赖，
//ignoredPlugin,忽略指定的依赖
//webpack.DllPlugin,用于将指定模块打包成librayry时指定动态链接库生成的名字和位置，
//webpack.DllReferencePlugin,通过manifest.json指定动态链接库的的位置
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer:{
        port:3000,
        open:true,//自动打开
        contentBase:'./dist'
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.DllReferencePlugin({//通过manifest.json指定动态链接库的的位置
            manifest:path.resolve(__dirname,'dist','manifest.json')
        }),
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),//在打包moment的时候，如果引入了.locale的包，则这个包忽略
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    module: {
        noParse:/jquery/,//对于这种包，不再去分析他有没有依赖，减少打包时间
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    }
}
```

## 多线程打包，happyPack
针对某种类型的文件，开启多线程打包
```js
let HappyPack = require('happypack')
output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HappyPack({
            id:'css',
            use:['style-loader','css-loader']
        }),
        new HappyPack({ //多线程打包js，然后还是用babel-loader来打包,这样打包的时候会开启多个线程出来，在对于项目比较大的情况下比较有用
            id: 'js',
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }]
        }),
        new webpack.DllReferencePlugin({ //通过manifest.json指定动态链接库的的位置
            manifest: path.resolve(__dirname, 'dist', 'manifest.json')
        }),
        new webpack.IgnorePlugin(/\.\/locale/, /moment/), //在打包moment的时候，如果引入了.locale的包，则这个包忽略
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
```

## webpack自动的优化
- tree-shaking 简化代码
- scope-host 删除引用后没有调用的代码

## 抽离公共代码和公用第三方模块
形成单独的文件，然后是通过jsonp来引用的，不用自己去配置
```js
optimization:{
        splitChunks:{//抽离公共代码，这个一般在多页应用时才有用,自己写的js,单页应用没有必要抽离
            cacheGroups:{//缓存组
                common:{//公共的模块
                    chunks:'initial',//初始入口
                    minSize:0,//最小字节，抽离条件
                    minChunks:2//引用2次以上就抽离
                },
                vender:{//抽离多次引用的第三方模块，不和自己写的js公共模块混在一起
                    priority:1,//先抽离第三方模块，在抽离自己写的公共模块
                    test:/node_modules/,//在这个文件夹下的第三方模块抽离出来
                    chunks:'initial',//初始入口
                    minSize:0,//最小字节，抽离条件
                    minChunks:2//引用2次以上就抽离
                },
            }
        },
    },
```

## 懒加载
在浏览器端的js，通过某个事件，使用import加载文件，用的是jsonp
- index.js
```js
let button = document.createElement('button')
button.innerText = 'click'

//vue,react的路由懒加载都是通过这个原理
button.addEventListener('click',function(){
    //es6草案中的语法，jsonp实现动态加载文件
    import('./source.js').then(data=>{
        console.log(data.default)
    })
})

document.body.appendChild(button)
```
- source.js
```js
console.log('source.js')
export default '懒加载'
```


## 热更新

```
webpack.config.js
    devServer: {
        hot:true,//打开热更新
        port: 3000,
        open: true, //自动打开
        contentBase: './dist'
    },
```
```js
index.js
import str from './source.js'

console.log(str)

//下面这段代码，加上在webpack的配置文件中的热更新配置，就可以实现当指定的文件模块更新时，自动输出更新模块的路径和信息。
if(module.hot){
    module.hot.accept('./source.js',()=>{
        console.log('文件更新了')
    })
}
```

## tapable模块，webpack原理的核心模块
类似与node的events模块，具有发布订阅模式。
### 同步钩子
- SyncHook
- SyncBailHook 保险钩子，只要有任何一个回调函数返回非undefined，那么中止执行之后注册的回调
- SyncWaterfallHook 瀑布流，注册的回调函数，前一个执行的结果传递给下一个回调函数
### 异步钩子
异步钩子都有注册和调用都有两种方式，一种是回调，一种是promise
- AsyncParallelHook 异步并行钩子
> 核心思想：利用done函数来计数已经完成的事件个数(回调),利用promise.all(promise)
- AsyncSeriesHook 异步串行钩子
> 核心思想：利用next函数异步递归自己来调用函数(回调),利用others.reduce方法和promsie.then来实现promise的迭代
- AsyncSeriesWaterfallHook 异步瀑布流钩子，注册的回调函数，前一个执行的结果传递给下一个回调函数
> 核心思想：利用带参数的next函数来传递数据递归自己(回调),利用others.reduce方法和promsie.then来实现promise的迭代

### tapable库中，有三种注册方法
 - tap 同步注册
 - tapAsync(cb) 
 - tapPromise(注册的是promise)
### 对应调用方法
 - call()
 - callAsync()
 - promise()