import { IUserModel } from '../models/users'
import { ITokenData } from './interfaces'

export const formatUserData = (user: IUserModel): ITokenData => {
  return {
    id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    iss: 'BACKEND',
    exp: new Date().getTime() + 1000 * 60 * 60 * 24 // Expired in 1 day
  }
}
