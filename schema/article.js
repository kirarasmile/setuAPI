const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('setu', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        pid: {
            type: DataTypes.INTEGER,
            primaryKey: false,
            allowNull: false,
        },
        uid: {
            type: DataTypes.INTEGER,
            primaryKey: false,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'url',
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title',
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'author',
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tag'
        }
    }, {
        freezeTableName: true
    })
}