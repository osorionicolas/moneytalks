import { MainResponse } from "@/lib/definitions"
import { useQuery } from "@tanstack/react-query"

const keys = {
    mainData: ["mainData"],
}

export function useMainData() {
    return useQuery({
        queryFn: async () => {
            const data: MainResponse = await fetch("/api/main").then(res => res.json()).then(data => data)
            return data
        },
        queryKey: keys.mainData,
    })
}
