// const http = require('http');
const express = require('express');
const app = express();
const mysql = require('mysql2')

app.get('/api/users', (req, res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
    //   password: '',  // <== ระบุให้ถูกต้อง
      database: 'dblabdevcamp',
      port : 3306  // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    });
    
    // เปิด connection ไปที่ database
    connection.connect();
    
    connection.query('SELECT * from user', (err, rows, fields) => {
      if (err) throw err;
    
      // return response กลับไปหา client โดยแปลง record เป็น json array
      res.json(rows);
    });
    
    // ปิด connection
    connection.end();
    });
    



app.listen(3000,() => {
    console.log('This is on server port 3000')
});