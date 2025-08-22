import type { RedisClientType } from 'redis'

let client: RedisClientType | null = null

export async function getRedisClient(): Promise<RedisClientType> {
  if (!client) {
    const { createClient } = await import('redis')
    const url = process.env.REDIS_URL
    client = createClient({ url })
    client.on('error', (err: unknown) => console.error('Redis error:', err))
    await client.connect()
  }
  return client
}
