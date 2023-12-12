import prisma from "../prisma"

export async function fetchNotifications() {
    try {
        const data = await prisma.notification.findMany({})
        return data
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to fetch notifications")
    }
}

