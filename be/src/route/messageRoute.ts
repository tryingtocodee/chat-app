import express from "express"
import protectedRoute from "../middleware/protectedRoute"
import { getChatsBetweenUsers, getUsersForSideBar, sendMessage } from "../controller/messageController"

const router = express.Router()

router.get("/users" , protectedRoute , getUsersForSideBar)
router.get("/:id" , protectedRoute , getChatsBetweenUsers)
router.post("/send/:id" , protectedRoute , sendMessage)

export default router