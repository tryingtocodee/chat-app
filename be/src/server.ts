import express from "express"
import dotenv from "dotenv"
import authRoute from "./route/userRoute"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({
    origin : "http://localhost:4000",
    credentials : true
}))
app.use(cookieParser())

const port = process.env.PORT

app.use(express.json())

app.use("/api/v0/auth" , authRoute)

app.listen(port , ()=>{
    console.log("server on port : " , port)
})