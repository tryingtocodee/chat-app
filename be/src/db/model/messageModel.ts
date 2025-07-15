import { InferAttributes , InferCreationAttributes , CreationOptional , Model, ForeignKey, DataTypes  } from "sequelize";
import sequelize from "./sequelie";

class Message extends Model <InferAttributes<Message> , InferCreationAttributes<Message>> {
    declare id : CreationOptional<number>
    declare senderId : ForeignKey<number>
    declare receiverId : ForeignKey<number>
    declare text : string
    declare image : string  
}

Message.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    senderId : {type : DataTypes.INTEGER , references : {model : "User" , key : "id"} , allowNull : false},
    receiverId : {type : DataTypes.INTEGER , references : {model : "User" , key : "id"} , allowNull : false},
    text : {type : DataTypes.STRING  , defaultValue : null},
    image : {type : DataTypes.STRING , defaultValue : null}
},{
    tableName : "Mesasge",
    sequelize,
    timestamps : true
})

export default Message