import Image from "next/image"

export default function Friend({ params }: { params: { id: string } }) {
    return <div>Friend {params.id}</div>
}
