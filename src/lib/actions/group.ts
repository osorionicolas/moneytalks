import prisma from "@/lib/prisma"
import { Group } from "@/lib/definitions"

export async function createGroup(group: Group) {

try {
    await prisma.group.create({
        data: {
            ...group,
            groupType: group.groupType.toString()
        },
    })
} catch (error) {
    return {
        message: "Database Error: Failed to Create Group.",
    }
}
}