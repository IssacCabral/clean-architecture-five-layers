import {Express, Router} from 'express'
import { ExpressAdapter } from '../adapters/express-routes-adapter'
import { makeCreateUserController } from '../factories/controllers/create-user/create-user-controller-factory'
import { makeDeleteUserController } from '../factories/controllers/delete-user/delete-user-controller-factory'

export const SetUpRoutes = (app: Express) => {
  const router = Router()

  router.get('/welcome', (req, res) => {return res.json({message: 'Bem vindo ao server'})})
  router.post('/users', ExpressAdapter.adapt(makeCreateUserController()))
  router.delete('/users/:id', ExpressAdapter.adapt(makeDeleteUserController()))

  app.use(router)
}