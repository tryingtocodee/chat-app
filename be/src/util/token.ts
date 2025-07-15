import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { Response } from "express"
import RefreshToken from "../db/model/refreshToken"

dotenv.config()

export default function generateToken(email : string , res : Response) {
    try {
        const jwtSecret = process.env.JWT_SECRET
        const refreshSecret = process.env.REFRESH_SECRET

        if(!jwtSecret || !refreshSecret){
            console.log("jwt secret not found in generate token")
            return 
        }

       const accessToken = jwt.sign({email} , jwtSecret , {expiresIn : "1h"}) 
       const refreshToken = jwt.sign({email} , refreshSecret  , {expiresIn : "1h"})

       res.cookie("accesstoken" , accessToken  , {
        maxAge : 60 * 60 * 1000 ,
        sameSite : "strict",
        httpOnly : true
       })

       res.cookie("refreshToken" ,  refreshToken , {
        maxAge : 60 * 60 * 1000 ,
        sameSite : "strict",
        httpOnly : true
       })

       
       return {accessToken , refreshToken} ;

    } catch (e : any) {
       console.log("erorr in generate token" , e.message) 
       throw e ;
    }
}