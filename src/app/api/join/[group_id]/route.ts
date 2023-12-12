import { type NextRequest } from "next/server"

export function GET(request: NextRequest, { params }: { params: { group_id: string } }) {
    const groupId = params.group_id

}
