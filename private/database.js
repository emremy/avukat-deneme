const Sequelize = require('sequelize');

const sequelize = new Sequelize('avukat', 'root', 'mert0607', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;