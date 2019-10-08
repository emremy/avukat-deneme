const Sequelize = require('sequelize');

const sequelize = require('../../private/database');

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    subdomain: {
        type:Sequelize.STRING,
        unique:true
    },
    nameAndSurname: Sequelize.STRING,
    information: {
        type: Sequelize.STRING,
        allowNull: true
    },
    zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    country: {
        type: Sequelize.STRING,
    },
    city: Sequelize.STRING,
    phonenumber: Sequelize.INTEGER,

});

module.exports = Users;