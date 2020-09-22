import { createServer } from 'http'
import { config as DotenvConfig } from 'dotenv'
import path from 'path'

import app from './server'

if (process.env.NODE_ENV === 'production') {
  DotenvConfig({ path: path.join(__dirname, '..', '.env') })
} else {
  DotenvConfig({ path: path.join(__dirname, '..', '.env.local') })
}

import './config/passport'

const port = process.env.PORT || 5000

createServer(app).listen(port, () => {
  console.log(`🚀 Server is listening on port: ${port} 🚀`)
})
