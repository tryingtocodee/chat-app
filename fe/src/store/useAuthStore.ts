import {create} from "zustand"
import { axiosInstance } from "../utils/axios"

export const useAuthStore = create((set)=>({
    authUser : null,
    isCheckingAuth : false,
    allUsers : [],

    signup : async () => {
        try {
           const res = await axiosInstance.post("/auth/signup") 
           
           set({authUser: res.data})

        } catch (e) {
            console.log("error in use auth strore" , e )
            set({authUser : null})        
        }
    },

    getAllUser : async() => {
        try {
           const res = await axiosInstance.get("/auth/users") 

           set({allUsers : res.data})

        } catch (e) {
            console.log("error in get all users store" , e)    
            set({allUsers : []})
        }
    }
}))