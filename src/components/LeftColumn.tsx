"use client"
import { Flag, List, Plus } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import Link from "next/link"
import { FriendModal } from "./FriendModal"

export default function LeftColumn() {
    const { data: session } = useSession()
    // const groups = useGroups()
    // const frinds = useFriends()
    return (
        <div className="basis-5/12 items-end">
            <div className="p-4">
                <div>
                    <Link href="/activity" className="flex">
                        <Flag />
                        Recent activity
                    </Link>
                </div>
                <div>
                    <Link href="/all" className="flex">
                        <List />
                        All expenses
                    </Link>
                </div>
                <div>
                    <div className="flex bg-gray-100">
                        Groups
                        <Button asChild variant="ghost" className="hover:bg-transparent hover:text-green-600 p-1 h-6">
                            <Link href="/groups/new">
                                <Plus size={16} />
                                Add
                            </Link>
                        </Button>
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className="flex bg-gray-100">
                        Friends
                        <FriendModal />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
