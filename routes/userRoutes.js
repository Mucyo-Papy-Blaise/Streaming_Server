import express from 'express'
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } from '../controller/user.controller.js'

const userRouter = express.Router()

// userRouter.route("/").post(createUser)
userRouter.post("/", createUser)
userRouter.route("/").get(getAllUsers)
userRouter.route("/userId").get(getSingleUser)
userRouter.route("/:userId").patch(updateUser)
userRouter.route("/:userId").delete(deleteUser)

export { userRouter };