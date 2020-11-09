import { config as DotenvConfig } from 'dotenv'
import path from 'path'

if (process.env.NODE_ENV !== 'production') {
  DotenvConfig({ path: path.join(__dirname, '..', '.env') })
}
