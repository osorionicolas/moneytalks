import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

type ExpenseModalProps = {
    title: string
    isCreation: boolean
    
}

const UsersComponent = ({ isCreation }: any) => {
    const text = isCreation ? 'With you and:' : 'With:'
    return (
        <div className="flex">
            {text}
            <Input className="border-none h-6" />
        </div>
    )
}

export function ExpenseModal({ title, isCreation }: ExpenseModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{title}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        <UsersComponent isCreation={isCreation} />
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input id="name" placeholder="Enter description" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input id="username" placeholder="0.00" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        Paid by {} and split {}. (You owe {})
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
