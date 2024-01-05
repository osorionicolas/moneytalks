'use client'
import Link from "next/link";
import {
  Settings,
  Plus,
  Github,
  LogOut,
  LogIn,
  ChevronDown,
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

export default function Header() {
  const { data: session } = useSession()
  return (
      <header className="flex w-full sm:justify-center justify-between px-4 py-2 bg-green-500 text-white sm:gap-80">
          <div className="flex justify-center items-center basis-1/3">
              <Link href="/" className="rounded-md">
                  <div className="text-xl font-bold cursor-pointer px-4 py-2 opacity-80 hover:opacity-100">Moneytalk$</div>
              </Link>
          </div>
          <div className="flex justify-center items-center basis-1/3">
              {session ? (
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="text-md">
                              {session.user?.name || session.user?.email?.split("@")[0]}
                              <ChevronDown size={16} />
                          </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                              <DropdownMenuItem asChild>
                                  <Link href="/account/settings">
                                      <div className="flex items-center p-1 cursor-pointer">
                                          <Settings className="mr-2 h-4 w-4" />
                                          Settings
                                      </div>
                                  </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                  <Link href="/groups/new">
                                      <div className="flex items-center p-1 cursor-pointer">
                                          <Plus className="mr-2 h-4 w-4" />
                                          New Team
                                      </div>
                                  </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                  <Link href="https://github.com/osorionicolas/moneytalks" target="_blank">
                                      <div className="flex items-center p-1 cursor-pointer">
                                          <Github className="mr-2 h-4 w-4" />
                                          GitHub
                                      </div>
                                  </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => signOut()}>
                                  <div className="flex items-center p-1 cursor-pointer">
                                      <LogOut className="mr-2 h-4 w-4" />
                                      Log out
                                  </div>
                              </DropdownMenuItem>
                          </DropdownMenuGroup>
                      </DropdownMenuContent>
                  </DropdownMenu>
              ) : (
                  <Button onClick={() => signIn()} variant="ghost">
                      <LogIn className="mr-2 h-4 w-4" />
                      Log in
                  </Button>
              )}
          </div>
      </header>
  )
}
