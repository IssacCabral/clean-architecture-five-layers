import {Express, Router} from 'express'
import { ExpressAdapter } from '../adapters/express-routes-adapter'

export const SetUpRoutes = (app: Express) => {
  app.get('/welcome', (req, res) => {
    return res.json({message: 'Bem vindo ao server'})
  })
  
  //app.post('/users', ExpressAdapter.adapt())
}