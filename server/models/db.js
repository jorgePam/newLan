//数据
const mysql = require('mysql');
const config = {//用户名密码等配置
    host: 'localhost',
    user: 'lan_admin',
    password: 'Qwe147852',
    database: 'dictionary'

} 
module.exports={//抽象到处 使用
    query: (sql,val,cb)=>{ //参数 对应， sql 语句， 查询参， 回调
        const conn = mysql.createConnection(config);  // 建立连接
        conn.connect();   // 可省略
        conn.query(sql, val, cb);  // 查询
        conn.end();  // 查询完成后关闭连接
    }
}