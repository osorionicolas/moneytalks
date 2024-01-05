import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moneytalk$',
  description: 'Track expenses',
}

export const fetchCache = 'default-no-store'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
      <html lang="en">
          <body className={inter.className}>
              <SessionProvider session={session}>
                  <Header />
                  {children}
              </SessionProvider>
          </body>
      </html>
  )
}
