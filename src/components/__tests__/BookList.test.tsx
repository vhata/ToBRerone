import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookList from '../BookList'

describe('BookList', () => {
  it('allows users to add books to the list', async () => {
    const user = userEvent.setup()
    render(<BookList />)

    const titleInput = screen.getByLabelText(/title/i)
    const authorInput = screen.getByLabelText(/author/i)
    const addButton = screen.getByRole('button', { name: /add book/i })

    await user.type(titleInput, 'The Hobbit')
    await user.type(authorInput, 'J.R.R. Tolkien')
    await user.click(addButton)

    expect(screen.getByText(/the hobbit/i)).toBeInTheDocument()
    expect(titleInput).toHaveValue('')
    expect(authorInput).toHaveValue('')
  })

  it('disables the add button when inputs are empty', async () => {
    const user = userEvent.setup()
    render(<BookList />)

    const titleInput = screen.getByLabelText(/title/i)
    const authorInput = screen.getByLabelText(/author/i)
    const addButton = screen.getByRole('button', { name: /add book/i })

    expect(addButton).toBeDisabled()
    await user.type(titleInput, 'Some Book')
    expect(addButton).toBeDisabled()
    await user.type(authorInput, 'Some Author')
    expect(addButton).toBeEnabled()
  })
})
