import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/user.model.js"
import handleResposne from "../utils/handleResponse.js"


export const createUser = async (req , res , next) => {
    try {
        const {name , email} = req.body
        const newUser = await createUserService(name , email)
        handleResposne(res , 201 , "User Created successfully" , newUser)
    } catch (error) {
        console.log(error)
        next(error)
    }
}



export const getAllUsers = async (req , res , next) => {
    try {
        const users = await getAllUsersService()
        handleResposne(res , 200 , "Users Fetched successfully" , users)
    } catch (error) {
        next(error)
    }
}



export const getUserById = async (req , res , next) => { 
    try {
        const user = await getUserByIdService(req.params.id)
        if(!user) handleResposne(res , 404 , "User Not Found")
        handleResposne(res , 200 , "User Fetched successfully" , user)
    } catch (error) {
        next(error)
    }
}



export const updateUser = async (req , res , next) => {
    try {
        const {name , email} = req.body
        const updatedUser = await updateUserService(req.params.id , name , email)
        if(!updatedUser) handleResposne(res , 404 , "User Not Found")
        handleResposne(res , 200 , "User Fetched successfully" , updatedUser)
    } catch (error) {
        next(error)
    }
}



export const deleteUser = async (req , res , next) => {
    try {
        const deletedUser = await deleteUserService(req.params.id)
        if(!deletedUser) handleResposne(res , 404 , "User Not Found")
        handleResposne(res , 200 , "User Fetched successfully" , deletedUser)
    } catch (error) {
        next(error)
    }
}
