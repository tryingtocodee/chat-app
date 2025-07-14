import sequelize from "./sequelie";
import { InferAttributes , InferCreationAttributes , CreationOptional, Model, DataTypes } from "sequelize";

class User extends Model<InferAttributes<User> , InferCreationAttributes<User> > {
    declare id : CreationOptional<number>
    declare email : string 
    declare password : string
    declare fullName : string
    declare profilePic? : string
}

User.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    email : {type : DataTypes.STRING , unique : true , allowNull : false},
    password : {type : DataTypes.STRING , allowNull : false},
    fullName : {type : DataTypes.STRING , allowNull : false},
    profilePic : {type : DataTypes.STRING , defaultValue : null}
},{
    tableName : 'User',
    sequelize,
    timestamps : true
})

export default User