import prisma from "../prisma"

export async function fetchGroups() {
    try {
        const data = await prisma.group.findMany({
            include: {
                GroupMembers: true,
            },
        })
        return data
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to fetch groups")
    }
}

export async function fetchGroupById(id: string) {
    try {
        const data = await prisma.group.findUnique({
            where: {
                id,
            },
            include: {
                GroupMembers: true
            }
        })
        return data
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to fetch group")
    }
}
