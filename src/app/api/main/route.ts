import { NextRequest, NextResponse } from "next/server"
import { MainResponse } from "@/lib/definitions"
import prisma from "@/lib/prisma"

export async function GET(req: NextRequest) {
    const token = req.cookies.get("next-auth.session-token")
    const session = await prisma.session.findUnique({ where: { sessionToken: token?.value } })
    const user = await prisma.user.findUnique({
        where: {
            id: session?.userId
        },
    })
    const groups = await prisma.group.findMany({
        where: {
            members: {
                some: {
                    memberId: session?.userId,
                },
            },
        },
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
