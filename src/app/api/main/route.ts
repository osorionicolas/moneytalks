import { NextResponse } from "next/server"
import { MainResponse, RegistrationStatus } from "../../../types"

export async function GET() {
    //const data = await res.json()
    const data: MainResponse = {
        user: {
            id: 1,
            country: "",
            defaultCurrency: "",
            dateFormat: "DD/MM/YYYY",
            email: "",
            firstName: "",
            locale: "en",
            avatar: "",
            registrationStatus: RegistrationStatus.CONFIRMED,
        },
        friends: [],
        groups: [],
        metadata: {
            features: [],
        },
        notifications: [],
    }
    return NextResponse.json({ data })
}
