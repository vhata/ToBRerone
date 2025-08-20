import { render, screen } from '@testing-library/react'
import HomePage from '../page'
jest.mock('next-auth/react', () => ({
  __esModule: true,
  useSession: jest.fn(() => ({ data: null, status: 'unauthenticated' })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

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

  it('shows the sign in button', () => {
    render(<HomePage />)
    const button = screen.getByRole('button', { name: /sign in with google/i })
    expect(button).toBeInTheDocument()
  })

  it('displays all feature cards', () => {
    render(<HomePage />)
    expect(screen.getByText(/track your books/i)).toBeInTheDocument()
    expect(screen.getByText(/google sheets sync/i)).toBeInTheDocument()
    expect(screen.getByText(/mobile friendly/i)).toBeInTheDocument()
  })
})
