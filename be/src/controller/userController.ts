import { Request , Response } from "express";
import { userSignupSchema } from "../validate/userValidate";
import { createUserService } from "../service/userService";
import generateToken from "../util/token";

export default async function signupController(req : Request , res : Response ) :Promise<any> {
    try {
       const validate = userSignupSchema.safeParse(req.body) 

       if(!validate.success){
            return res.status(400).json({
                msg : "incorrect input",
                error : validate.error
            })
       }

       const user = await createUserService(validate.data)

       if(!user){
        return res.status(500).json("failed to create user")
       }

       const token = generateToken(user.email , res)

       return res.json({
        msg : "user created successfully",
        user : {
            fullName : user.fullName,
            email : user.email,
            profilePic : user.profilePic
        }
       })

    } catch (e : any) {
        console.log("error in sign up controller" , e.message)
        return res.status(500).json("Internal server error")
    }
}

