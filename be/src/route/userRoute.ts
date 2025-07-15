import express from "express"
import signupController from "../controller/userController"

const router = express.Router()

router.post("/signup" , signupController)
//router.post("/login" , loginController)
//router.post("/logout" , logoutController)

export default router