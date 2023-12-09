import ExpenseField from "@/components/ExpenseField"
import { ExpenseModal } from "@/components/ExpenseModal"
import { Category } from "@/types"
import Image from "next/image"

export default function All() {
    //const expenses = useExpenses()
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
    return (
        <>
            <div className="flex">
                All expenses
                <ExpenseModal title="Add an expense" isCreation={true} />
            </div>
            <ExpenseField expense={expense} />
        </>
    )
}
