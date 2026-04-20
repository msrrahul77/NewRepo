

import express from "express"
import { serviceController } from "./services.controllerss.js"


const router = express.Router()

router.post("/create-services",serviceController.createServices)
router.get("/",serviceController.getServices)
router.get("/:id", serviceController.getSingleService)
router.put("/:id",serviceController.update)
router.delete("/:id",serviceController.remove)
const serviceRoute=router
export default serviceRoute