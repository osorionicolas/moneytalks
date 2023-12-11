import ActivityField from "@/components/ActivityField"
import { Activity } from "@/lib/definitions"
import SectionHeader from "@/components/SectionHeader"

export default function ActivityPage() {
    // const activity = getActivity()
    const activity: Activity[] = [
        {
            id: 1,
            content: "",
            image: "",
            date: new Date(),
            category: "",
        },
    ]
    return (
        <>
            <SectionHeader title="Recent activity" showButtons={false} />
            {activity.map((activity: Activity) => (
                <ActivityField activity={activity} key={activity.id} />
            ))}
        </>
    )
}
