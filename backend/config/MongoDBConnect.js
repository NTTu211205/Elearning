const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // Cấu hình để tránh các cảnh báo cũ của Mongoose
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1); // Dừng server nếu kết nối thất bại
    }
};

module.exports = connectDB;
connectDB()