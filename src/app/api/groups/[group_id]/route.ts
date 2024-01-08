import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { group_id: string } }) {
    const groupId = params.group_id
    const group = await prisma.group.findUnique({
        where: {
            id: groupId
        }
    })
    return NextResponse.json(group)
}
