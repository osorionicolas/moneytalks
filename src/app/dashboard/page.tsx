'use client'
import ExpenseField from "@/components/ExpenseField"
import { ExpenseModal } from "@/components/ExpenseModal"
import { Category } from "@/types"

async function getMainData() {
    const res = await fetch("/api/main")
    const data = await res.json()
    return data.data
}

export default function Dashboard() {
    const data = getMainData()
    const expense = {
        id: 1,
        category: Category.FOOD_AND_DRINK,
        description: 'Mercadona',
        cost: 100,
        currency: 'EUR',
        repayment: [{
            from: 1,
            to: 1,
            amount: 1.0
        }],
        groupId: 1,
        createdAt: new Date(),
        createdBy: {
            firstName: 'Nicolas'
        }
    }
    return (
        <>
            <div className="flex">
                Dashboard
                <ExpenseModal title="Add an expense" isCreation={true} />
            </div>
            <ExpenseField expense={expense} />
        </>
    )
}
