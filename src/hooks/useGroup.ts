import { Group } from "@/lib/definitions"
import { useQuery } from "@tanstack/react-query"

const keys = {
    group: ["group"]
}

export function useGroup(groupId: string) {
    return useQuery({
        queryFn: async () => {
            const data: Group = await fetch(`/api/groups/${groupId}`)
                .then((res) => res.json())
                .then((data) => data)
            return data
        },
        queryKey: [...keys.group, groupId],
    })
}
