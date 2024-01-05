import { NextResponse } from "next/server"
import { MainResponse, RegistrationStatus } from "@/lib/definitions"
import prisma from "@/lib/prisma"

export async function GET() {
    //const data = await res.json()
    const userId = 'clqzqm5tz0003dk2kggy98lwc'
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    const groups = await prisma.group.findMany({
        where: {
            members: {
                some: {
                    memberId: userId
                }
            }
        }
    })
    //const friends = await prisma.group.findMany()
    const data: MainResponse = {
        user: user,
        friends: [],
        groups: groups,
        metadata: {
            features: [],
        },
        notifications: [],
    }
    return NextResponse.json({ data })
}
