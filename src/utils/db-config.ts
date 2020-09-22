export default {
  keepAlive: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 3000,
  socketTimeoutMS: 3000,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  authSource: process.env.DB_AUTHSOURCE,
  ssl: (process.env.DB_SSL || '').toLowerCase() === 'true',
  replicaSet: process.env.DB_REPLICA
}
