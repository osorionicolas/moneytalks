"use client"
import SectionHeader from "@/components/SectionHeader"
import ExpenseField from '@/components/ExpenseField'
import { Expense } from '@/lib/definitions'
import { useGroup } from "@/hooks/useGroup"
import { useExpenses } from "@/hooks/useExpense"
import Link from "next/link"

export default function Group({ params }: { params: { id: string } }) {
    const { data: group } = useGroup(params.id)
    const { data: expenses } = useExpenses(params.id)
    
    return (
        <>
            <SectionHeader title={group?.name} />
            {expenses?.map((expense: Expense) => (
                <>
                    <div className="flex w-full items-center justify-between bg-gray-100 px-3 py-1 border-y-2 text-xs">
                        {new Date(expense.createdAt).toLocaleString("default", { month: "long", year: "numeric" }).toUpperCase()}
                        <Link href="" className="text-link hover:underline">View printable summary</Link>
                    </div>
                    <ExpenseField expense={expense} showGroup={false} key={expense.id} />
                </>
            ))}
        </>
    )
}
