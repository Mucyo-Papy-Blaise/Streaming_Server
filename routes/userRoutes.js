import express from 'express'
import { createUser, deleteUser, getAllUsers, getSingleUser, loginUser, updateUser } from '../controller/user.controller.js'

const userRouter = express.Router()

userRouter.route("/").post(createUser)
userRouter.route("/login").post(loginUser)

userRouter.route("/singleUser").get(getSingleUser)

userRouter.route("/").get(getAllUsers)
userRouter.route("/:userId").patch(updateUser)
userRouter.route("/:userId").delete(deleteUser)

export { userRouter };