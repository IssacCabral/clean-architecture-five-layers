import {Express, Router} from 'express'
import { ExpressAdapter } from '../adapters/express-routes-adapter'
import { makeCreateUserController } from '../factories/controllers/create-user/create-user-controller-factory'
import { makeDeleteUserController } from '../factories/controllers/delete-user/delete-user-controller-factory'
import { makeFindUserByEmailController } from '../factories/controllers/find-user-by-email/find-user-by-email-controller-factory'
import { makeFindUserByIdController } from '../factories/controllers/find-user-by-id/find-user-by-id-contoller-factory'
import { makeFindUsersController } from '../factories/controllers/find-users/find-users-controller-factory'

export const SetUpRoutes = (app: Express) => {
  const router = Router()

  router.get('/welcome', (req, res) => {return res.json({message: 'Bem vindo ao server'})})
  router.post('/users', ExpressAdapter.adapt(makeCreateUserController()))
  router.get('/users/:id', ExpressAdapter.adapt(makeFindUserByIdController()))
  router.get('/users/email/:email', ExpressAdapter.adapt(makeFindUserByEmailController()))
  router.get('/users', ExpressAdapter.adapt(makeFindUsersController()))
  router.delete('/users/:id', ExpressAdapter.adapt(makeDeleteUserController()))

  app.use(router)
}