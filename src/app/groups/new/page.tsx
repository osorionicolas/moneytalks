import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Groups() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form method="POST" action="/groups">
                <div className="flex flex-col">
                    <div>Start a new group</div>
                    <div>My group shall be called…</div>
                    <Input type="email" placeholder="Email" />
                </div>
                <Input id="picture" type="file" />
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </main>
    )
}
