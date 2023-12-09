"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Expense } from "@/types"
import { ExpenseModal } from "@/components/ExpenseModal"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"

type ExpenseProps = {
    expense: Expense
}

export default function ExpenseField({ expense }: ExpenseProps) {

    const formatDate = (date: Date) =>
        date.toLocaleDateString("default", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })

  return (
      <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={expense.id.toString()}>
              <AccordionTrigger className="hover:bg-gray-100 hover:no-underline">
                  <div className="grid grid-cols-12 w-full items-center">
                      <div className="">
                          <div>{expense.createdAt.toLocaleString("default", { month: "short" }).toUpperCase()}</div>
                          <div>{expense.createdAt.toLocaleString("default", { day: "2-digit" })}</div>
                      </div>
                      <div>{expense.category}</div>
                      <div className="col-span-6 text-left">{expense.description}</div>
                      {expense.repayment.length === 1 ? (
                          <div>
                              <div>{expense.repayment[0].from}</div>
                              <div>
                                  {expense.currency}
                                  {expense.repayment[0].amount.toFixed(2)}
                              </div>
                          </div>
                      ) : (
                          <div>
                              <div>{expense.repayment[0].from}</div>
                              <div>
                                  {expense.currency}
                                  {expense.repayment[0].amount.toFixed(2)}
                              </div>
                          </div>
                      )}
                      {expense.repayment.length === 1 ? (
                          <div>
                              <div>{expense.repayment[0].from}</div>
                              <div>
                                  {expense.currency}
                                  {expense.repayment[0].amount.toFixed(2)}
                              </div>
                          </div>
                      ) : (
                          <div>
                              <div>{expense.repayment[0].from}</div>
                              <div>
                                  {expense.currency}
                                  {expense.repayment[0].amount.toFixed(2)}
                              </div>
                          </div>
                      )}
                      <div>
                          <X
                              className="h-4 w-4 shrink-0 transition-transform duration-200"
                              color="red"
                              strokeWidth={3}
                          />
                      </div>
                  </div>
              </AccordionTrigger>
              <AccordionContent>
                  <div className="grid">
                      <div></div>
                      <div>{expense.description}</div>
                      <div>
                          {expense.currency}
                          {expense.cost}
                      </div>
                      <div>
                          Added by {expense.createdBy.firstName}. on {formatDate(expense.createdAt)}
                      </div>
                      {expense.updatedAt && (
                          <div>
                              Last updated by {expense.createdBy.firstName}. on {formatDate(expense.updatedAt)}
                          </div>
                      )}
                      <ExpenseModal title="Edit expense" isCreation={false} />
                      <Separator />
                  </div>
              </AccordionContent>
          </AccordionItem>
      </Accordion>
  )
}
