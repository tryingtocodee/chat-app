import cloudinary from "../config/cloudinaryConfig";
import { createUserDto } from "../Dto/userDto";
import { createUserRepo } from "../repo/userRepo";
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