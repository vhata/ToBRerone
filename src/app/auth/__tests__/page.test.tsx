import { render, screen } from '@testing-library/react'
import GoogleAuthPage from '../page'

describe('GoogleAuthPage', () => {
  it('disables the authenticate button and shows a warning when client ID is missing', () => {
    render(<GoogleAuthPage />)
    const button = screen.getByRole('button', { name: /authenticate with google/i })
    expect(button).toBeDisabled()
    expect(screen.getByText(/missing google oauth client id/i)).toBeInTheDocument()
  })
})
