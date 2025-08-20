import { NextResponse } from 'next/server'
import { auth } from '../../../lib/auth'
import { appendBookToSheet, Book } from '../../../lib/googleSheets'

export async function POST(req: Request) {
  const session = await auth()
  const accessToken = (session as any)?.accessToken as string | undefined
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
