import express from "express"
import dotenv from "dotenv"
import authRoute from "./route/userRoute"
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use("/api/v0/auth" , authRoute)

app.listen(port , ()=>{
    console.log("server on port : " , port)
})