import Image from "next/image"

export default function Group({ params }: { params: { id: string } }) {
    return (
        <div>Group {params.id}</div>
    )
}
