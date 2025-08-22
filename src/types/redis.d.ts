declare module 'redis' {
  export interface RedisClientType {
    connect(): Promise<void>
    on(event: string, listener: (...args: unknown[]) => void): this
    set(key: string, value: string): Promise<string | null>
  }
  export function createClient(config: { url?: string }): RedisClientType
}
