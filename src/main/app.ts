import "reflect-metadata"
import express from 'express'
import { json } from "express"
import { SetUpRoutes } from "./config/routes"

import env from '../infra/config/env'

const serverPort = Number(env.SERVER_PORT)
const app = express()

app.use(json())
SetUpRoutes(app)

app.listen(serverPort, () => {
  console.log(`server running on port ${serverPort}`)
})