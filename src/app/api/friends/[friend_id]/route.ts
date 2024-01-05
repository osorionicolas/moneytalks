export async function GET(request: Request, { params }: { params: { friend_id: string } }) {
    const friendId = params.friend_id
    const friend = await prisma.user.findUnique({
        where: {
            id: friendId,
        },
    })
    return friend
}
