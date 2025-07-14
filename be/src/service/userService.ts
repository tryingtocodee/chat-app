import { createUserDto } from "../Dto/userDto";
import { createUserRepo } from "../repo/userRepo";
import b from "bcryptjs"

export const createUserService = async (userDto : createUserDto) => {
    try {
        const hashPassword = await b.hash(userDto.password , 10)

        userDto.password = hashPassword ;

        if(userDto.profilePic) {
            const uploadImage = await 
        }
       const user = await createUserRepo(userDto) 
    } catch (e : any) {
        
    }
}