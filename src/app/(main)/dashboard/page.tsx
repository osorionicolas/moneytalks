import SectionHeader from "@/components/SectionHeader"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default async function Dashboard() {
    return (
        <>
            <SectionHeader title="Dashboard" />
            <div className="flex space-x-4 text-sm w-full items-center bg-gray-100 p-3 text-center">
                <div className="flex-1">
                    total balance
                    <div>$0</div>
                </div>
                <Separator orientation="vertical" />
                <div className="flex-1">
                    you owe
                    <div>$0</div>
                </div>
                <Separator orientation="vertical" />
                <div className="flex-1">
                    you are owed
                    <div>$0</div>
                </div>
            </div>
            <div className="grid grid-cols-2 w-full">
                <div className="text-sm w-full items-center p-3 text-center">
                    <div>YOU OWE</div>
                    <div className="flex text-left justify-start">
                        <Image src="" alt="" />
                        <div>
                            {"username"}
                            <div>you owe $0</div>
                        </div>
                    </div>
                </div>
                <div className="text-sm w-full items-center p-3 text-center">
                    <div>YOU ARE OWED</div>
                    <div className="flex text-right justify-end">
                        <Image src="" alt="" />
                        <div>
                            {"username"}
                            <div>you are owed $0</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
