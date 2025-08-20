import { NextResponse } from 'next/server'
import type { Session } from 'next-auth'
import { auth } from '../../../lib/auth'
import { appendBookToSheet, Book } from '../../../lib/googleSheets'

export async function POST(req: Request) {
  const session = (await auth()) as (Session & { accessToken?: string }) | null
  const accessToken = session?.accessToken
  if (!accessToken) {
    return new Response('Unauthorized', { status: 401 })
  }
  const { spreadsheetId, book } = (await req.json()) as {
    spreadsheetId: string
    book: Book
  }
  await appendBookToSheet(accessToken, spreadsheetId, book)
  return NextResponse.json({ success: true })
}
