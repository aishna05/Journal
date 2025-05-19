// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Career Companion',
  description: 'AI-powered journaling, planning, and skill testing for career growth',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-blue-600 text-white py-4 shadow">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Career Companion</h1>
            <nav className="space-x-4">
              <a href="/journal" className="hover:underline">Journal</a>
              <a href="/planner" className="hover:underline">Planner</a>
              <a href="/skills" className="hover:underline">Skill Test</a>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto mt-8 px-4">
          {children}
        </main>

        <footer className="text-center py-6 text-sm text-gray-500 border-t mt-10">
          &copy; {new Date().getFullYear()} Career Companion. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
