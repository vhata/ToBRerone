import { NextRequest, NextResponse } from 'next/server'
import { getRedisClient } from '@/lib/redis'

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json()
    if (!token) {
      return NextResponse.json({ error: 'Missing token' }, { status: 400 })
    }
    const redis = await getRedisClient()
    await redis.set('google_sheets_token', token)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to store token', error)
    return NextResponse.json({ error: 'Failed to store token' }, { status: 500 })
  }
}
