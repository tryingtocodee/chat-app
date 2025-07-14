import User from "../db/model/userModel";
import { getUserDto, createUserDto } from "../Dto/userDto";

export const getUserByIdRepo = async(id : number) => {
    try {
       const user = await User.findByPk(id) 

       if(!user){
        throw new Error("no user found with this id")
       }

       return user ;
    } catch (e : any) {
       console.log("error in getUser repo" , e.message) 
       throw e ;
    }
}

export const createUserRepo = async(userDto : createUserDto ) => {
    try{
        const user = await User.findOne({where : {email : userDto.email}}) 

        if(!user){
            throw new Error("user with this email already exists")
        }

        const newUser = await User.create({
            email : userDto.email,
            fullName : userDto.fullName,
            password : userDto.password,
            profilePic : userDto.profilePic
        })

        if(!newUser){
            throw new Error("failed to create new user")
        }
        return user ;
    }catch(e : any){
        console.log("error creating new user")
        throw e ; 
    }
}