import express from 'express'
import { TeamController } from './TeamController.js'


const router = express.Router()

router.post("/create-team", TeamController.createTeam)
router.get("/", TeamController.getTeam)
router.get("/:id", TeamController.getSingleTeam)
router.patch("/:id", TeamController.update)
router.delete("/:id",TeamController.remove)
const TeamRouter = router
export default TeamRouter
