import Image from "next/image"
import SectionHeader from "@/components/SectionHeader"
import { Group, GroupType, User } from "@/lib/definitions"
import { Separator } from "@/components/ui/separator"

export default function Friend({ params }: { params: { id: string } }) {
    const friend = {}
    const group = {
        id: 1,
        name: "Group",
        createdAt: new Date,
        members: [{
            
        } as User],
        cover: "",
        groupType: GroupType.HOME,
        originalDebts: {},
        simplifiedDebts: {}
    }
    const groups: Group[] = [group]
    const grouped: { [key: string]: Group[] } = groups.reduce(
        (r: any, v: Group, i, a, k = v.createdAt.toLocaleString("default", { month: "long", year: "numeric" })) => (
            (r[k] || (r[k] = [])).push(v), r
        ),
        {}
    )
    return (
        <>
            <SectionHeader title={params.id} />
            {Object.keys(grouped).map((key, index) => (
                <>
                    <div className="flex text-sm w-full bg-gray-100 p-3" key={index}>
                        {key}
                    </div>
                    {grouped[key].map((group: Group) => (
                        <div key={group.id} className="flex justify-between text-center">
                            <div className="flex items-center">
                                <div className="">
                                    <div>
                                        {group.createdAt.toLocaleString("default", { month: "short" }).toUpperCase()}
                                    </div>
                                    <div>{group.createdAt.toLocaleString("default", { day: "2-digit" })}</div>
                                </div>
                                <Image src="" alt="" />
                                <div>{group.name}</div>
                            </div>
                            <div>
                                you owe
                                <div>$0</div>
                            </div>
                        </div>
                    ))}
                    <Separator />
                </>
            ))}
        </>
    )
}
