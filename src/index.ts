import { createServer } from 'http'
import './config/environment'
import app from './server'

require('./config/passport')
const port = process.env.PORT || 5000

createServer(app).listen(port, () => {
  console.log(`🚀 Server is listening on port: ${port} 🚀`)
})
