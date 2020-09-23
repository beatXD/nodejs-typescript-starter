import { Document, model, Model, Schema } from 'mongoose'

export interface IUser {
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

export const User: Model<IUserModel> = model<IUserModel>('User', userSchema, 'users')
