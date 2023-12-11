import ExpenseField from "@/components/ExpenseField"
import { ExpenseModal } from "@/components/ExpenseModal"
import { Category, Expense } from "@/lib/definitions"
import Image from "next/image"
import SectionHeader from "@/components/SectionHeader"

export default function All() {
    const expense = {
        id: 1,
        category: Category.FOOD_AND_DRINK,
        description: "Mercadona",
        cost: 100,
        currency: "EUR",
        repayment: [
            {
                from: 1,
                to: 1,
                amount: 1.0,
            },
        ],
        groupId: 1,
        createdAt: new Date(),
        createdBy: {
            firstName: "Nicolas",
        },
    }
    const expenses: Expense[] = [expense]

    return (
        <>
            <SectionHeader title="All expenses" />
            {expenses.map((expense: Expense) => (
                <ExpenseField expense={expense} showGroup={true} key={expense.id} />
            ))}{" "}
        </>
    )
}
