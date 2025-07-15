import { InferAttributes , InferCreationAttributes , Model , CreationOptional, ForeignKey, DataTypes } from "sequelize";
import sequelize from "./sequelie";

class RefreshToken extends Model <InferAttributes<RefreshToken> , InferCreationAttributes<RefreshToken> > {
    declare id : CreationOptional<number>
    declare email : ForeignKey<string>
    declare access : "granted" | "revoked" 
}

RefreshToken.init({
    id : {type :DataTypes.INTEGER , primaryKey : true , autoIncrement : true},
    email : {type : DataTypes.STRING , references : {model : "User" , key : "email"}},
    access : {type : DataTypes.ENUM("granted" , "revoked") , defaultValue : "granted"}
},{
    tableName : "RefreshToken",
    sequelize,
    timestamps : true
})

export default RefreshToken