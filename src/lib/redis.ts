let client: any = null

export async function getRedisClient(): Promise<any> {
  if (!client) {
    const { createClient } = await import('redis')
    const url = process.env.REDIS_URL
    client = createClient({ url })
    client.on('error', (err: unknown) => console.error('Redis error:', err))
    await client.connect()
  }
  return client
}
