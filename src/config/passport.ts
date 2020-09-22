import passport from 'passport'
import passportLocal from 'passport-local'
import passportJWT from 'passport-jwt'

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
    // Find local user login
  })
)

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_JWT as string
    },
    (payload, done) => {
      // Authentication user is exist.
      return done(null, payload)
    }
  )
)
