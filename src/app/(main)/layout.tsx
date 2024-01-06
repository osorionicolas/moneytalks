'use client'
import LeftColumn from "@/components/LeftColumn"
import RightColumn from '@/components/RightColumn'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="flex [&>*]:flex [&>*]:flex-col">
          <LeftColumn />
          <main className="basis-7/12 min-h-screen flex-col p-4 shadow-lg">{children}</main>
          <RightColumn />
      </div>
  )
}
