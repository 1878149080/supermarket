const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    devServer : {
        open : true
    },
    chainWebpack:(config) =>{//配置路径别名
        config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
        .set('@',resolve('./src'))
        .set('components',resolve('@/components'))
        .set('assets',resolve('@/assets'))
        .set('views',resolve('@/views'))
        .set('network',resolve('@/network'))
    }
}