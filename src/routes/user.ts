import UserController from '../controllers/user'
import { Router } from 'express'
import Auth from '../controllers/auth'

class UserRoute {
  public router: Router
  private auth: Auth = new Auth()
  private user: UserController = new UserController()

  constructor() {
    this.router = Router()
    this.routes()
  }

  private routes() {
    this.router.get('/me', this.auth.checked, this.user.me)

    this.router.post('/register', this.user.register)
    this.router.post('/login', this.user.login)
  }
}

export default UserRoute
