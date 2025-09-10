import { NextRequest, NextResponse } from 'next/server'
import { getRedisClient } from '@/lib/redis'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
    }

    const redis = await getRedisClient()
    const token = await redis.get(`google_sheets_token:${userId}`)

    if (!token) {
      return NextResponse.json({ error: 'Token not found' }, { status: 404 })
    }

    return NextResponse.json({ token })
  } catch (error) {
    console.error('Failed to retrieve token', error)
    return NextResponse.json({ error: 'Failed to retrieve token' }, { status: 500 })
  }
}
