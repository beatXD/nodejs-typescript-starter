import { NextFunction, Request, Response } from 'express'
import passport from 'passport'
import { User } from '../models/users'
import { hashPassword } from '../utils/auth-helpers'
import { decodeToken, generateToken } from './../utils/auth-helpers'
import { formatUserData } from './../utils/helpers'

class UserController {
  /**
   * me
   */
  public me(req: Request, res: Response): any {
    const token: any = req.headers.authorization?.split(' ')
    const user = decodeToken(token[1])
    return res.status(200).send(user)
  }

  /**
   * register
   */
  public async register(req: Request, res: Response): Promise<any> {
    try {
      const { email, password, firstName, lastName } = req.body
      const user = await User.findOne({ email })
      if (user) return res.status(201).send({ message: 'email is already exist' })
      console.log(user)
      const newUser = new User({
        email,
        password: await hashPassword(password),
        firstName,
        lastName
      })
      await newUser.save()
      return res.status(200).end()
    } catch (error) {
      return res.status(500).end()
    }
  }

  /**
   * login
   */
  public login(req: Request, res: Response, next: NextFunction): any {
    return passport.authenticate('local', { session: false }, (err, user) => {
      if (err) return next(err)
      if (!user) return res.status(401).end()
      const token = generateToken(formatUserData(user))
      return res.status(200).send(token)
    })(req, res, next)
  }
}

export default UserController
