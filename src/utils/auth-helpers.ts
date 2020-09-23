import argon, { argon2id } from 'argon2'
import { decode, sign } from 'jsonwebtoken'
import passport from 'passport'

export const validateJWT = passport.authenticate('jwt', { session: false })

export const hashPassword = async (password: string): Promise<string> => {
  const hash = await argon.hash(password, { type: argon2id })
  return hash
}

export const validatePassword = async (userPassword: string, inputPassword: string): Promise<boolean> => {
  try {
    const comparePassword = await argon.verify(userPassword, inputPassword, { type: argon2id })
    return comparePassword
  } catch (error) {
    return false
  }
}

export const generateToken = (data: object): string => {
  const token = sign(data, process.env.SECRET_JWT as string)
  return token
}

export const decodeToken = (token: string): any => {
  const values = decode(token)
  return values
}
