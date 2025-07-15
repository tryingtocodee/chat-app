import { Request , Response } from "express";
import User from "../db/model/userModel";
import { Op } from "sequelize";
import Message from "../db/model/messageModel";
import cloudinary from "../config/cloudinaryConfig";

export async function getUsersForSideBar(req : Request , res : Response) :Promise<any>{
    try {
       const userId = req.user.email
       
       if(!userId){
        return res.status(400).json("failed to get user login again")
       }

       const allUsers = await User.findAll({where : {id : { [Op.ne] : userId} } , attributes : {exclude : ['password'] }})

       if(!allUsers){
        return res.status(400).json("no users registered till now")
       }

       return res.json({
        msg : "found all users",
        users : allUsers
       })
    } catch (e : any) {
       console.log("error in get user for sidebar" , e.message) 
       return res.status(500).json("Internal server error")
    }
}

export async function getChatsBetweenUsers(req : Request , res : Response) : Promise<any> {
    try {
        const {id : userToChatId} = req.params

        const myId = req.user.id
        const messages = await Message.findOne({where : {senderId : myId , receiverId : userToChatId}})
    
        if(!messages){
            return res.status(400).json("no msgs found with this user")
        }

        return res.json({
            msg : "message found",
            message : messages
        })
    } catch (e : any) {
       console.log("error in get chat between user function" , e.message) 
       return res.status(500).json("Internal server error")
    }
}

export async function sendMessage(req : Request , res : Response) :Promise<any> {
    try {
       const {text , image} = req.body 

       const {id : userToChatId} = req.params
       const myId = req.user.id

      const receiverId = parseInt(userToChatId) 

       let imageUrl = "" ;
       if(image){
        const uploadImage = await cloudinary.uploader.upload(image)
        imageUrl = uploadImage.secure_url
       }

       //todo : add multiple image sending functionality // real time code comes here 

       const newMessage = Message.create({
        senderId : myId,
        receiverId : receiverId,
        text ,
        image : imageUrl
       })

    } catch (e : any) {
        console.log("error in send message" , e.message)
        return res.status(500).json("Internal server error")
    }
}