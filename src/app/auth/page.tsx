'use client'

import { useEffect, useState } from 'react'

// Minimal type declarations for Google Identity Services
interface TokenResponse {
  access_token?: string
}

interface GoogleTokenClient {
  requestAccessToken: () => void
}

interface GoogleAuth {
  accounts: {
    oauth2: {
      initTokenClient: (config: {
        client_id: string
        scope: string
        callback: (tokenResponse: TokenResponse) => void
      }) => GoogleTokenClient
    }
  }
}

declare global {
  interface Window {
    google?: GoogleAuth
  }
}

export default function GoogleAuthPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [authMessage, setAuthMessage] = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.onload = () => setScriptLoaded(true)
    document.body.appendChild(script)
  }, [])

  const handleAuth = () => {
    if (!window.google) return

      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
        scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
        callback: (tokenResponse: TokenResponse) => {
          if (tokenResponse.access_token) {
            setAuthMessage('Authentication successful!')
          } else {
            setAuthMessage('Authentication failed.')
          }
        },
      })

    client.requestAccessToken()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Connect Google Sheets</h1>
        <p className="mb-6 text-gray-600">
          Authenticate with your Google account to allow access to your Google Sheets data.
        </p>
        <button
          onClick={handleAuth}
          className="rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
          disabled={!scriptLoaded}
        >
          Authenticate with Google
        </button>
        {authMessage && <p className="mt-4 text-sm text-green-600">{authMessage}</p>}
      </div>
    </main>
  )
}

