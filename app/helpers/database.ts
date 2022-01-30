import { Connection, createConnection } from 'typeorm'

export const MysqlConnect = {
  client: null as Connection,

  async connect(): Promise<void> {
    const connect: Connection = await createConnection()
    this.client = connect
  },
  async close(): Promise<void> {
    await this.client.close()
  },
  isConnected(): boolean {
    const isconnected = this.client.isConnected
    return isconnected
  },
  getRepository(repository: any): any {
    const repo = this.client.getRepository(repository)
    return repo
  }
}
