"use client"

import { ExpenseModal } from "./ExpenseModal"

type SectionHeaderProps = {
    image?: string,
    title: string,
    showButtons?: boolean
}

export default function SectionHeader({ image, title, showButtons = true}: SectionHeaderProps) {
    return (
        <div className="flex w-full items-center justify-between bg-gray-100 p-3">
            <div>
                {image}
                {title}
            </div>
            {showButtons && <ExpenseModal title="Add an expense" isCreation={true} />}
        </div>
    )
}
