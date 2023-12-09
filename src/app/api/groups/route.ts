export async function POST(request: Request, { body }: { body: { group_name: string } }) {
    const groupName = body.group_name
    console.log(groupName)
}
