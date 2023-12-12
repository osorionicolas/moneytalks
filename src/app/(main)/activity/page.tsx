import ActivityField from "@/components/ActivityField"
import { Notification } from "@/lib/definitions"
import SectionHeader from "@/components/SectionHeader"

export default function ActivityPage() {
    // const activity = getActivity()
    const activity: Notification[] = [
        {
            id: "",
            content: "",
            image: "",
            createdAt: new Date(),
            createdBy: "",
            category: "",
            source: {}
        },
    ]
    return (
        <>
            <SectionHeader title="Recent activity" showButtons={false} />
            {activity.map((activity: Notification) => (
                <ActivityField activity={activity} key={activity.id} />
            ))}
        </>
    )
}
