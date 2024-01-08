"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Expense } from "@/lib/definitions"
import { ExpenseModal } from "@/components/ExpenseModal"
import { Separator } from "@/components/ui/separator"
import { Receipt, X } from "lucide-react"

type ExpenseFieldProps = {
    expense: Expense
    showGroup: boolean
}

export default function ExpenseField({ expense, showGroup }: ExpenseFieldProps) {
    const formatDate = (date: Date) => 
        new Date(date).toLocaleDateString("default", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={expense.id.toString()}>
                <AccordionTrigger className="hover:bg-gray-100 hover:no-underline group">
                    <div className="grid grid-cols-12 w-full items-center">
                        <div>
                            <div>
                                {new Date(expense.createdAt)
                                    .toLocaleString("default", { month: "short" })
                                    .toUpperCase()}
                            </div>
                            <div>{new Date(expense.createdAt).toLocaleString("default", { day: "2-digit" })}</div>
                        </div>
                        <div className="flex items-center justify-center h-9 w-9 bg-gray-100">
                            <Receipt />
                        </div>
                        <div>
                            <div className="col-span-6 text-left">{expense.description}</div>
                            {showGroup && <div>Group</div>}
                        </div>
                        {expense.repayment?.length === 1 ? (
                            <div>
                                <div>{expense.repayment[0].from}</div>
                                <div>
                                    {expense.currency}
                                    {expense.repayment[0].amount.toFixed(2)}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div></div>
                                <div>{expense.currency}</div>
                            </div>
                        )}
                        {expense.repayment?.length === 1 ? (
                            <div>
                                <div>{expense.repayment[0].from}</div>
                                <div>
                                    {expense.currency}
                                    {expense.repayment[0].amount.toFixed(2)}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div></div>
                                <div>{expense.currency}</div>
                            </div>
                        )}
                        <X className="h-4 w-4 shrink-0 hidden group-hover:block" color="red" strokeWidth={3} />
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="p-4">
                        <div className="grid grid-cols-2">
                            <div className="flex items-center justify-center h-20 w-20 bg-gray-100">
                                <Receipt size={54} />
                            </div>
                            <div>
                                <div>{expense.description}</div>
                                <div>
                                    {expense.currency} {expense.cost}
                                </div>
                                <div>
                                    Added by {expense.createdBy.firstName}. on {formatDate(expense.createdAt)}
                                </div>
                                {expense.updatedAt && (
                                    <div>
                                        Last updated by {expense.createdBy.firstName}. on{" "}
                                        {formatDate(expense.updatedAt)}
                                    </div>
                                )}
                                <ExpenseModal title="Edit expense" isCreation={false} />
                            </div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2"></div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
