import LeftColumn from "@/components/LeftColumn"
import RightColumn from '@/components/RightColumn'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await fetch("/api/main")
      .then((res) => res.json())
      .then((data) => data)

  return (
      <div className="flex [&>*]:flex [&>*]:flex-col">
          <LeftColumn data={data} />
          <main className="basis-7/12 min-h-screen flex-col p-4 shadow-lg">{children}</main>
          <RightColumn />
      </div>
  )
}
