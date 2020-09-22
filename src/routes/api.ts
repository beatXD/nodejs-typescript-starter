import { Router } from 'express'

class APIRoutes {
  public router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }

  private routes() {
    this.router.get('/', (req, res) => {
      res.send({ display: 'routes api' })
    })
  }
}

export default APIRoutes
