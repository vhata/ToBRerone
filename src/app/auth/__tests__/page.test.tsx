import { render, screen } from '@testing-library/react'
import GoogleAuthPage from '../page'

describe('GoogleAuthPage', () => {
  it('renders the authenticate button', () => {
    render(<GoogleAuthPage />)
    const button = screen.getByRole('button', { name: /authenticate with google/i })
    expect(button).toBeInTheDocument()
  })
})

