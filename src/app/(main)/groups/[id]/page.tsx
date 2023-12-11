import prisma from '@/lib/prisma'
import SectionHeader from "@/components/SectionHeader"
import ExpenseField from '@/components/ExpenseField'
import { Expense } from '@/lib/definitions'

export default async function Group({ params }: { params: { id: string } }) {
    //const groupt = await prisma.group
    const expenses: Expense[] = []
    return (
        <>
            <SectionHeader title={params.id} />
            {expenses.map((expense: Expense) => (
                <ExpenseField expense={expense} showGroup={false} key={expense.id} />
            ))}
        </>
    )
}
