// const proxy = require('http-proxy-middleware');
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    // proxy第一个参数为要代理的路由
    // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，其他参数请看官网
    app.use(createProxyMiddleware('/homeApi', {
        target: 'http://47.110.59.220:5200/goods',
        changeOrigin: true,
        pathRewrite: {
            '^/homeApi': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
        }
    }))
    // https://m.5173.com/m-base-frontend/HotRecommend/selectHotRecommend
    // app.use(createProxyMiddleware('/homeApi1', {
    //     target: 'https://m.5173.com',
    //     changeOrigin: true,
    //     pathRewrite: {
    //         '^/homeApi1': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
    //     }
    // }))
}