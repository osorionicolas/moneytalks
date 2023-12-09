import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import LeftColumn from "@/components/LeftColumn"
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import RightColumn from '@/components/RightColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moneytalks',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
      <html lang="en">
          <body className={inter.className}>
              <SessionProvider session={session}>
                  <Header />
                  <div className="flex [&>*]:flex [&>*]:flex-col">
                      <LeftColumn />
                      <main className="basis-7/12 min-h-screen flex-col items-center justify-between p-4 shadow-lg">
                          <div></div>
                          {children}
                      </main>
                      <RightColumn />
                  </div>
              </SessionProvider>
          </body>
      </html>
  )
}
