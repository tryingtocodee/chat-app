import { Request , Response } from "express";
import { userSignupSchema } from "../validate/userValidate";

export default async function signupController(req : Request , res : Response ) :Promise<any> {
    try {
       const validate = userSignupSchema.safeParse(req.body) 

       if(!validate.success){
            return res.status(400).json({
                msg : "incorrect input",
                error : validate.error
            })
       }

       const user = 
    } catch (e : any) {
        console.log("error in sign up controller" , e.message)
        return res.status(500).json("Internal server error")
    }
}