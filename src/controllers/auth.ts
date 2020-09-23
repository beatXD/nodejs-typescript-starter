import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

class Auth {
  public checked(req: Request, res: Response, next: NextFunction): any {
    return passport.authenticate('jwt', (error, user) => {
      if (error) return res.status(401).send('unauthorized')
      if (!user) return res.status(401).send('unauthorized')
      return next()
    })(req, res, next)
  }
}

export default Auth
