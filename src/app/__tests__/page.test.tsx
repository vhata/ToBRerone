import { render, screen } from '@testing-library/react'
import HomePage from '../page'

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    const heading = screen.getByRole('heading', { name: /tbr tracker/i })
    expect(heading).toBeInTheDocument()
  })

  it('displays the welcome message', () => {
    render(<HomePage />)
    const welcome = screen.getByText(/welcome to your reading journey/i)
    expect(welcome).toBeInTheDocument()
  })

  it('shows the get started button as disabled', () => {
    render(<HomePage />)
    const button = screen.getByRole('button', { name: /get started/i })
    expect(button).toBeDisabled()
  })

  it('includes a link to authenticate with Google', () => {
    render(<HomePage />)
    const link = screen.getByRole('link', { name: /authenticate with google/i })
    expect(link).toHaveAttribute('href', '/auth')
  })

  it('displays all feature cards', () => {
    render(<HomePage />)
    expect(screen.getByText(/track your books/i)).toBeInTheDocument()
    expect(screen.getByText(/google sheets sync/i)).toBeInTheDocument()
    expect(screen.getByText(/mobile friendly/i)).toBeInTheDocument()
  })
})
