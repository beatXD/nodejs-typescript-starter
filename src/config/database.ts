import mongoose from 'mongoose'
import options from '../utils/db-config'

class Database {
  private url: string

  constructor(DATABASE_URL: string) {
    this.url = DATABASE_URL
    this.mongo()
  }

  private mongo() {
    const connections = mongoose.connection

    connections.on('connected', (): void => {
      console.log('Mongo connection Established on ' + this.url)
    })
    connections.on('reconnected', (): void => {
      console.log('Mongo connection ReEstablished')
      this.restart()
    })
    connections.on('disconnected', (): void => {
      console.log('Mongo connection disconnected')
      console.log('Try to reconnect to database')
      this.restart()
    })

    connections.on('close', (): void => {
      console.error(`Mongo connection close`)
      this.restart()
    })
    connections.on('error', (err: Error): void => {
      console.error(`Mongo connection error: ${err}`)
      this.restart()
    })
  }

  private restart(ms = 3000) {
    setTimeout(() => {
      mongoose.connect(this.url, options)
    }, ms)
  }

  /**
   * Start Database
   */
  public async start(): Promise<any> {
    await mongoose.connect(this.url, options)
  }
}

export default Database
