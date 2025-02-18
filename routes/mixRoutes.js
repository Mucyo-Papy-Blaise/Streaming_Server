import express from "express"
import { createMix, deleteMix, getAllMix, getsingleMix, updateMix } from "../controller/mix.controller.js";
import { uploadFiles } from "../cloudinary/cloudinaryConfig.js";

const mixRouter = express.Router();

mixRouter.route("/createMix").post(uploadFiles, createMix)
mixRouter.route("/").get(getAllMix)

mixRouter.route("/").get(getsingleMix)
mixRouter.route("/:mixId").patch(updateMix)
mixRouter.route("/:mixId").delete(deleteMix)

export { mixRouter }