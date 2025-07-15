import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"
import { Request , Response } from "express"
import { getUserByEmailRepo } from "../repo/userRepo"

dotenv.config()

interface IUser {
    email : string
    id : number
    fullName : string
}

declare global {
    namespace Express {
        interface Request { 
            user : IUser
        }
    }
}

export default async function protectedRoute (req : Request , res : Response):Promise<any>{
    try {
       const token = req.cookies.accessToken

       if(!token){
        return res.status(400).json("cookie not found")
       }
       const jwtSecret = process.env.JWT_SECRET

       if(!jwtSecret){
        console.log("jwt secret not found in procted route")
        return
       }

       const decode = jwt.verify(token , jwtSecret ) as JwtPayload

       if(!decode){
        return res.status(400).json("Incorrect token login again ")
       }
       
       const email = decode.email

       const user = await getUserByEmailRepo(email)

       req.user = user as IUser

       return req.user

    } catch (e : any) {
       console.log("error in protectedRoute" , e.message) 
        return res.status(500).json("Internal server error")
    }
}