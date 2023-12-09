"use client"
import { Activity } from "@/types"
import { Separator } from "@/components/ui/separator"

type ActivityProps = {
    activity: Activity
}

export default function ActivityField({ activity }: ActivityProps) {
    function isInCurrentWeek(date: Date) {
        const currentDate = new Date()
        const currentWeek = getWeekNumber(currentDate)
        const givenWeek = getWeekNumber(date)

        return currentWeek.year === givenWeek.year && currentWeek.week === givenWeek.week
    }

    function getWeekNumber(date: Date) {
        const yearStart = new Date(date.getFullYear(), 0, 1)
        const weekNumber = Math.ceil(((date - yearStart) / 86400000 + 1) / 7) // 86400000 ms in a day
        return { week: weekNumber, year: date.getFullYear() }
    }

    const formatDate = (date: Date) => {
        if (isInCurrentWeek(date)) {
            return date.toLocaleDateString("en-US", { weekday: "long" })
        }
        return `${date.toLocaleString("default", { month: "short" })} ${date.toLocaleString("default", {
            day: "2-digit",
        })}`
    }

    return (
        <div className="w-full">
            {activity.content}
            {formatDate(activity.date)}
            <Separator />
        </div>
    )
}
