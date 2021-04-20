const mysql = require('mysql2')
const config = require('./config')

const connections = mysql.createPool({
  host:config.MYSQL_HOST,
  port:config.MYSQL_PORT,
  database:config.MYSQL_DATABASE,
  user:config.MYSQL_USER,
  password:config.MYSQL_PASSWORD
})


connections.getConnection((err,conn)=>{
  if(err){
    console.log('连接mysql错误: ', err);
    process.exit(1)
  }
  conn.connect((err)=>{
    if(err){
      console.log('失败');
    }else{
      console.log('成功');
    }
  })
})

module.exports = connections.promise()