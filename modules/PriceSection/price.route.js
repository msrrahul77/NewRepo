import express from 'express'
import { priceController } from './price.controller.js'


const router = express.Router()

router.post("/create-price", priceController.createPrice)
router.get("/", priceController.getPrice)
router.get("/:id", priceController.getSinglePrice)
router.patch("/:id", priceController.update)
router.delete("/:id",priceController.remove)
const PriceRouter = router
export default PriceRouter
