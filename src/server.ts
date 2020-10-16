import { json, urlencoded } from 'body-parser'
import compression from 'compression'
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Database from './config/database'
import APIRoutes from './routes/api'
import UserRoute from './routes/user'

class Server {
  public app: express.Application

  private database: Database = new Database(process.env.DATABASE_URL || 'mongodb://localhost:27017/test')

  constructor() {
    this.app = express()
    this.startDatabase()
    this.middleware()
    this.routes()
  }

  private middleware() {
    this.app.all('*', function (req: Request, res: Response, next: NextFunction) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
      res.header('Content-Type', 'application/json;charset=utf-8')
      next()
    })

    this.app.set('trust proxy', 1)

    this.app.use(helmet())
    this.app.use(compression())
    this.app.use(morgan('dev'))
    this.app.use(json())
    this.app.use(urlencoded({ extended: false }))
  }

  private routes() {
    this.app.use('/api', new APIRoutes().router)
    this.app.use('/user', new UserRoute().router)
  }

  private startDatabase() {
    this.database.start().catch(console.error)
  }
}

export default new Server().app
