import express from "express"
import { createUser , deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js"

const router = express.Router()


router.get("/" , getAllUsers)

router.post("/" , createUser)

router.get("/:id" , getUserById)

router.put("/:id" , updateUser)

router.delete("/:id" , deleteUser)



export default router