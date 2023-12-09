"use client"
import { Flag, List } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function RightColumn() {
    const { data: session } = useSession()
    return (
        <div className="basis-5/12">
            
        </div>
    )
}
