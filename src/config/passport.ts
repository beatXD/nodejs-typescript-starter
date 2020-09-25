import passport from 'passport'
import passportJWT from 'passport-jwt'
import passportLocal from 'passport-local'
import { User } from '../models/users'
import { validatePassword } from '../utils/auth-helpers'

const LocalStrategy = passportLocal.Strategy
const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt

passport.serializeUser((user: any, done) => {
  done(null, user.id)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(
  new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email }).lean()

      if (!user) return done(null, undefined)

      const isMatch = await validatePassword(user.password, password)
      if (!isMatch) return done(null, undefined)

      return done(null, user)
    } catch (error) {
      return done(error, undefined)
    }
  })
)

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_JWT as string
    },
    async (payload, done) => {
      try {
        if (new Date().getTime() > payload.expired) return done(null, undefined)
        const user = await User.findById({ _id: payload.id })
        if (user) return done(null, user)
        return done(null, undefined)
      } catch (error) {
        return done(error, null)
      }
    }
  )
)
