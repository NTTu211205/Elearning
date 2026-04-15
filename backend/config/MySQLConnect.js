const mysql = require('mysql2');
require('dotenv').config();

// Tạo Pool kết nối
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10, // Tối đa 10 kết nối cùng lúc
    queueLimit: 0
});

// Chuyển sang dạng Promise để dùng async/await
const promisePool = pool.promise();

// Kiểm tra kết nối khi khởi động server
promisePool.getConnection()
    .then(connection => {
        console.log('✅ Kết nối MySQL thành công!');
        connection.release();
    })
    .catch(err => {
        console.error('❌ Lỗi kết nối MySQL:', err.message);
    });

module.exports = promisePool;
