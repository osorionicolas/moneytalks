import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const groupId = searchParams.get("group_id")
    const expenses = await prisma.expense.findMany({
        where: {
            ...(groupId ? {groupId: groupId} : {})
        },
        include: {
            createdById: true,
            updatedById: true,
        },
    })
    return NextResponse.json(expenses)
}
