import {z}  from "zod"

export const userSignupSchema = z.object({
    email : z.email({error : "email is mandatory"}),
    fullName : z.string({error : "full name is mandatory"}),
    password : z.string({error : "password is mandatory"}),
    profilePic : z.string().optional()
})