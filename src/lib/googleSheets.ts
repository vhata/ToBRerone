import { google } from 'googleapis'

export interface Book {
  title: string
  author: string
}

export async function appendBookToSheet(
  accessToken: string,
  spreadsheetId: string,
  book: Book,
) {
  const auth = new google.auth.OAuth2()
  auth.setCredentials({ access_token: accessToken })
  const sheets = google.sheets({ version: 'v4', auth })
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:B',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[book.title, book.author]],
    },
  })
}
