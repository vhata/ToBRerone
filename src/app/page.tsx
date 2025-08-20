import { signIn, signOut, useSession } from 'next-auth/react'

export default function HomePage() {
  const { data: session } = useSession()
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">TBR Tracker</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Organize and track your To Be Read list with ease. Connect with Google Sheets to sync
            your reading goals across all devices.
          </p>
        </header>

        <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            Welcome to Your Reading Journey
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500">
                <span className="text-xl font-bold text-white">📚</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Track Your Books</h3>
              <p className="text-gray-600">
                Easily add books to your TBR list and mark them as read when finished.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500">
                <span className="text-xl font-bold text-white">📊</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Google Sheets Sync</h3>
              <p className="text-gray-600">
                Connect with your Google account to sync data with your personal spreadsheet.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500">
                <span className="text-xl font-bold text-white">📱</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Mobile Friendly</h3>
              <p className="text-gray-600">
                Access your reading list anywhere with our responsive, mobile-first design.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          {session ? (
            <button
              onClick={() => signOut()}
              className="rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn('google')}
              className="rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
            >
              Sign in with Google
            </button>
          )}
          <p className="mt-2 text-sm text-gray-500">
            {session
              ? 'Connected to Google Sheets.'
              : 'Framework setup complete! Ready for feature development.'}
          </p>
        </div>
      </div>
    </main>
  )
}
