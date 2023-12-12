import prisma from "../prisma"

export async function fetchExpenses() {
    try {
        const data = await prisma.expense.findMany({
            include: {
                createdById: true,
                updatedById: true,
            },
        })
        return data
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to fetch expenses")
    }
}

export async function fetchExpensesByGroup(groupId: string) {
    try {
        const data = await prisma.expense.findMany({
            where: {
                group: {
                    id: groupId
                }
            },
            include: {
                createdById: true,
                updatedById: true
            },
        })
        return data
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to fetch expenses")
    }
}

export async function fetchExpensesByFriend() {
    try {
        const data = await prisma.expense.findMany({
            include: {},
        })
        return data
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to fetch expenses")
    }
}