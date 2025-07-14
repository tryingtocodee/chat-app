import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username : "root",
    password : "mysql-secret",
    host : "127.0.0.1",
    database : "chat_app",
    dialect :"mysql"
})

export default sequelize