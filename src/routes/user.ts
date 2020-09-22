import UserController from '../controllers/user'
import { Router } from 'express'

class UserRoute {
  public router: Router

  private user: UserController = new UserController()

  constructor() {
    this.router = Router()
    this.routes()
  }

  private routes() {
    this.router.get('/', this.user.me)
  }
}

export default UserRoute
