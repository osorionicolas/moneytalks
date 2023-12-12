import prisma from "@/lib/prisma"
import { Expense } from "@/lib/definitions"

export async function createGroup(expense: Expense) {
    try {
        await prisma.expense.create({
            data: {
                ...expense,
                createdBy: expense.createdBy.id!,
                updatedBy: expense.updatedBy?.id
            },
        })
    } catch (error) {
        return {
            message: "Database Error: Failed to Create Expense.",
        }
    }
}
