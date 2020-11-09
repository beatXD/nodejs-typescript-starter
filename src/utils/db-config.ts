let options: any
const defaultOptions = {
  keepAlive: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 3000,
  socketTimeoutMS: 3000
}

if (process.env.NODE_ENV !== 'production') {
  options = defaultOptions
} else {
  options = Object.assign({}, defaultOptions, {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    authSource: process.env.DB_AUTHSOURCE || 'admin',
    ssl: (process.env.DB_SSL || '').toLowerCase() === 'true',
    replicaSet: process.env.DB_REPLICA || ' '
  })
}

export default options
