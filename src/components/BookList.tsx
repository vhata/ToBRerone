'use client'

import { useState } from 'react'
import type { Book } from '../types'

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const canAdd = title.trim() !== '' && author.trim() !== ''

  const addBook = () => {
    if (!canAdd) return

    const newBook: Book = {
      id: Date.now().toString(),
      title: title.trim(),
      author: author.trim(),
      dateAdded: new Date(),
      status: 'to-read',
    }

    setBooks((prev) => [...prev, newBook])
    setTitle('')
    setAuthor('')
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 md:flex-row">
        <div>
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="author" className="sr-only">
            Author
          </label>
          <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="w-full rounded border p-2"
          />
        </div>
        <button
          onClick={addBook}
          disabled={!canAdd}
          className="rounded bg-primary-600 px-4 py-2 font-semibold text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-gray-300 hover:bg-primary-700"
        >
          Add Book
        </button>
      </div>
      <ul className="list-disc pl-5">
        {books.map((book) => (
          <li key={book.id} className="mb-1">
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}
