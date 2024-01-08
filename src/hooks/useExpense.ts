import { Expense, Group } from "@/lib/definitions"
import { useQuery } from "@tanstack/react-query"

const keys = {
    expenses: ["expenses"]
}

export function useExpenses(groupId?: string) {
    return useQuery({
        queryFn: async () => {
            const query = groupId ? `?group_id=${groupId}` : ""
            const url = "/api/expenses" + query

            const data: Expense[] = await fetch(url)
                .then((res) => res.json())
                .then((data) => data)
            return data
        },
        queryKey: [...keys.expenses, groupId],
    })
}
