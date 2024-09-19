const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', // Указываем, что используем PostgreSQL
    logging: console.log // Отключаем вывод SQL-запросов в консоль (по желанию)
});

module.exports = sequelize;
