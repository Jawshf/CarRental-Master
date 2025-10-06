require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  secretKey: process.env.JWT_SECRET || 'your_default_secret_key',
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/car_rentals',
};

module.exports = config;
