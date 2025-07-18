import cloudinary from "../config/cloudinaryConfig";
import { createUserDto, loginUserDto } from "../Dto/userDto";
import { createUserRepo, getUserByEmailRepo } from "../repo/userRepo";
import b from "bcryptjs"

export const createUserService = async (userDto : createUserDto) => {
    try {
        const hashPassword = await b.hash(userDto.password , 10)

        userDto.password = hashPassword ;

        if(userDto.profilePic) {
            const uploadImage = await cloudinary.uploader.upload(userDto.profilePic)
            userDto.profilePic = uploadImage.secure_url 
        }
       const user = await createUserRepo(userDto)
       
       if(!user){
        throw new Error("failed to create user")
       }

       return user ; 
    } catch (e : any) {
       console.log("error in create user service" , e.message)
       throw e ; 
    }
}

export const loginUserService = async (userDto : loginUserDto) => {
    try {
       const user = await getUserByEmailRepo(userDto.email)
      
        if(!user){
            throw new Error("failed email verification ")
        }

        const verifyPassword = await b.compare(userDto.password , user.password)

        if(!verifyPassword){
            throw new Error("incorrect password ")
        }

        return user

    } catch (e : any) {
       console.log("error in login user service" , e.message) 
       throw e 
    }
}