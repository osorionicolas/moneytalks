'use client'

import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useRouter } from "next/navigation"

const QueryProvider = ({ children }: { children: React.ReactNode}) => {
    const router = useRouter()

    const [queryClient] = useState(
        () =>
            new QueryClient({
                queryCache: new QueryCache({
                    onError: (error: any) => {
                        console.log(error)
                        if (error?.response?.status === 401) {
                            //router.push("/")
                            //logout()
                        }
                        if (error?.response?.status === 404) {
                            router.push("/not-found")
                        }
                    },
                }),
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default QueryProvider