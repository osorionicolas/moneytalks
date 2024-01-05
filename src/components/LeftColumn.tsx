import { Flag, Home, List, Plus, UsersRound } from "lucide-react"
import { useSession } from "next-auth/react"
import { Button } from "./ui/button"
import Link from "next/link"
import { FriendModal } from "./FriendModal"
import { Group } from "@/lib/definitions"

export default async function LeftColumn({data}: any) {
    const { data: session } = useSession()
    return (
        <div className="basis-5/12 items-end">
            <div className="p-4">
                <div>
                    <Link href="/dashboard" className="flex">
                        <Home />
                        Dashboard
                    </Link>
                </div>
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
                    {data.groups.map((group: Group) => (
                        <Link key={group.id} href={`/groups/${group.id}`}>
                            <UsersRound size={16} />
                            {group.name}
                        </Link>
                    ))}
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
