export interface Book {
  id: string
  title: string
  author: string
  isbn?: string
  genre?: string
  pages?: number
  dateAdded: Date
  dateRead?: Date
  status: 'to-read' | 'reading' | 'completed'
  rating?: number
  notes?: string
  googleSheetsRowId?: number
}

export interface ReadingGoal {
  id: string
  year: number
  target: number
  current: number
}

export interface GoogleSheetsConfig {
  spreadsheetId: string
  sheetName: string
  isConnected: boolean
  lastSync?: Date
}

export interface User {
  id: string
  email: string
  name: string
  googleSheetsConfig?: GoogleSheetsConfig
}
