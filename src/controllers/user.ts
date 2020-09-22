import { Request, Response } from 'express'

class UserController {
  /**
   * me
   */
  public me(req: Request, res: Response) {
    const fakeUser = {
      name: 'Jesse Zieme'
    }
    return res.status(200).send({ user: fakeUser })
  }
}

export default UserController
