import express from "express"
import { createMix, deleteMix, getAllMix, getsingleMix, updateMix } from "../controller/mix.controller.js";

const mixRouter = express.Router();

mixRouter.route("/createMix").get(createMix)
mixRouter.route("/").get(getAllMix)
mixRouter.route("/").get(getsingleMix)
mixRouter.route("/:mixId").patch(updateMix)
mixRouter.route("/:mixId").delete(deleteMix)

export { mixRouter }