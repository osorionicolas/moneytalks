'use client'
import Link from "next/link";
import {
  CreditCard,
  Github,
  LogIn,
  LogOut,
  Plus,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
    const { data: session } = useSession()
    const router = useRouter()
    return (
        <header className="w-full items-center justify-between lg:flex bg-green-500 text-white">
            <Link href="/">Moneytalks</Link>
            {session ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost">{session?.user?.name}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem asChild>
                                <Link href="/account/settings">
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/groups/new">
                                    <Plus className="mr-2 h-4 w-4" />
                                    <span>New Team</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="https://github.com/osorionicolas/moneytalks" target="_blank">
                                    <Github className="mr-2 h-4 w-4" />
                                    <span>GitHub</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut()}>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button onClick={() => signIn()} variant="ghost">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Log in</span>
                </Button>
            )}
        </header>
    )
}
