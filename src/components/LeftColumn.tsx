import { Flag, Home, List, Plus, UserRound, UsersRound } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { FriendModal } from "./FriendModal"
import { Group, User } from "@/lib/definitions"
import { useMainData } from "@/hooks/useMainData"
import { Input } from "./ui/input"

export default function LeftColumn() {
    const { data } = useMainData()
    const menus = {
        dashboard: {
            href: "/dashboard",
            icon: Home,
            title: "Dashboard",
        },
        activity: {
            href: "/activity",
            icon: Flag,
            title: "Recent activity",
        },
        expenses: {
            href: "/all",
            icon: List,
            title: "All expenses",
        },
    }

    const sendInvite = () => {

    }

    return (
        <div className="basis-5/12 items-end">
            <div className="flex flex-col p-4">
                {Object.entries(menus).map(([key, value]) => (
                    <Link href={value.href} className="flex items-center gap-1 hover:bg-gray-100 p-1" key={key}>
                        <value.icon size={20} />
                        {value.title}
                    </Link>
                ))}
                <div>
                    <div className="flex bg-gray-100 p-1">
                        Groups
                        <Button asChild variant="ghost" className="hover:bg-transparent hover:text-green-600 p-1 h-6">
                            <Link href="/groups/new">
                                <Plus size={16} />
                                Add
                            </Link>
                        </Button>
                    </div>
                    {data?.groups?.map((group: Group) => (
                        <Link
                            key={group.id}
                            href={`/groups/${group.id}`}
                            className="flex items-center hover:bg-gray-100 gap-1 p-1 pl-3"
                        >
                            <UsersRound size={16} />
                            {group.name}
                        </Link>
                    ))}
                </div>
                <div>
                    <div className="flex bg-gray-100 p-1">
                        Friends
                        <FriendModal />
                    </div>
                    {data?.friends?.map((friend: User) => (
                        <Link
                            key={friend.id}
                            href={`/friends/${friend.id}`}
                            className="flex items-center hover:bg-gray-100 gap-1 p-1 pl-3"
                        >
                            <UserRound size={16} />
                            {friend.firstName || friend.email}
                        </Link>
                    ))}
                </div>
                <div className="">
                    Invite friends
                    <Input placeholder="Enter an email address"/>
                    <Button onClick={sendInvite}>Send invite</Button>
                </div>
            </div>
        </div>
    )
}
