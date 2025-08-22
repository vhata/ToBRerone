declare module 'redis' {
  export function createClient(config: { url?: string }): any
}
