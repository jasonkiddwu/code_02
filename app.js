// 导入 express 模块
const express = require('express')
//创建express的服务器实例
const app = express()


//调用app.listen()方法，指定端口号并启动web服务器
app.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000')
})