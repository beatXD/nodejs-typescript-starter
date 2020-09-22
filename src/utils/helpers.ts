import passport from 'passport'

export const validateJWT = passport.authenticate('jwt', { session: false })
