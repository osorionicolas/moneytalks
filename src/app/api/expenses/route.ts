import { type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const groupId = searchParams.get("groupId")
    
    const expenses = await prisma.expense.findMany({
        where: {
            ...(groupId ? {id: groupId} : {})
        },
        include: {
            createdById: true,
            updatedById: true,
        },
    })
    return expenses
}
