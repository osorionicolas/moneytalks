import ActivityField from '@/components/ActivityField'
import { Activity } from '@/types'

export default function ActivityPage() {
    // const activity = getActivity()
    const activity: Activity[] = [{
        id: 1,
        content: '',
        image: '',
        date: new Date,
        category: ''
    }]
    return (
        <>
            {activity.map((activity: Activity) => (
                <ActivityField activity={activity} key={activity.id} />
            ))}
        </>
    )
}
