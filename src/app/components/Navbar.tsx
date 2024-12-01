import Link from 'next/link'
import React from 'react'
import { auth, signOut, signIn } from '../../../auth'

const Navbar = async () => {
  const session = await auth()

  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg font-work-sans">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <div className="text-red-500 font-extrabold text-2xl sm:text-3xl cursor-pointer transition-transform transform hover:scale-105">
              PITCH
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center">
          {session?.user && (
            <Link
              href="/startup/create"
              className="text-gray-300 hover:text-red-500 text-lg font-medium transition duration-200"
            >
              Create
            </Link>
          )}
          {session?.user ? (
            <div className="flex items-center space-x-4">
              <form
                action={async () => {
                  'use server'
                  await signOut({ redirectTo: '/' })
                }}
              >
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-gray-300 border border-gray-500 rounded hover:bg-red-500 hover:text-white transition duration-200"
                >
                  Logout
                </button>
              </form>
              <Link
                href={`/user/${session.user.id}`}
                className="px-4 py-2 text-sm text-gray-300 border border-gray-500 rounded hover:bg-red-500 hover:text-white transition duration-200"
              >
                {session.user.name}
              </Link>
            </div>
          ) : (
            <form
              action={async () => {
                'use server'
                await signIn('github')
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 text-sm text-gray-300 border border-gray-500 rounded hover:bg-red-500 hover:text-white transition duration-200"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </nav>

      {/* Responsive Mobile Menu */}
      <div className="lg:hidden bg-gray-800 border-t border-gray-700">
        <div className="flex flex-col space-y-2 py-4 px-6">
          {session?.user && (
            <Link
              href="/startup/create"
              className="text-gray-300 hover:text-red-500 text-sm font-medium"
            >
              Create
            </Link>
          )}
          {session?.user ? (
            <>
              <form
                action={async () => {
                  'use server'
                  await signOut()
                }}
              >
                <button
                  type="submit"
                  className="text-sm text-gray-300 border border-gray-500 rounded px-4 py-2 hover:bg-red-500 hover:text-white transition"
                >
                  Logout
                </button>
              </form>
              <Link
                href={`/user/${session.user.id}`}
                className="text-sm text-gray-300 border border-gray-500 rounded px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                {session.user.name}
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                'use server'
                await signIn('google')
              }}
            >
              <button
                type="submit"
                className="text-sm text-gray-300 border border-gray-500 rounded px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
