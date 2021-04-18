const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "temp.db"
})

class User extends Model { }
User.init({
    role: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
}, { freezeTableName: true, sequelize, modelName: 'User' })


class Message extends Model { }
Message.init({
    content: DataTypes.STRING,
    creator: DataTypes.STRING,
    time: DataTypes.TIME,
}, { sequelize, modelName: 'Message' })

User.hasMany(Message)
Message.belongsTo(User);

(async () => {
    sequelize.sync({ force: true })
})()

module.exports = {
    User,
    Message,
    sequelize
}