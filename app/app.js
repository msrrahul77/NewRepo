import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import server from '../server/server.js'
import config from "../config/index.js"
import serviceRoute from "../modules/Services/services.route.js"
import PriceRouter from "../modules/PriceSection/price.route.js"
import TeamRouter from "../modules/TeamData/TeamRoute.js"

// import  server  from "../server/server.js"

const port=config.PORT || 8000
const app = express()
app.use(cors())
app.use(express.json())
// Parse JSON bodies
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.status(200).json("Hello")
})
app.use("/services", serviceRoute)
app.use("/price",PriceRouter)
app.use("/team",TeamRouter)
app.listen(port, () => {
    server()
console.log(`Server is Running ${port}`)
})