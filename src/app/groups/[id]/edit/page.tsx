'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import groupImage from "../../../../public/groups1.jpeg"
import { useState } from "react"


export default function Groups() {
    const [image, setImage] = useState(groupImage.src)

    const updateImage = (event: any) => {
        setImage(window.URL.createObjectURL(event.target.files[0]))
    }

    return (
        <main className="flex h-[calc(100vh-60px)] items-center sm:items-start justify-center sm:p-24">
            <form method="POST" action="/groups">
                <div className="grid grid-cols-2 gap-16">
                    <div className="grid justify-items-center gap-5">
                        <Image
                            src={image}
                            alt="Group image"
                            height={250}
                            width={250}
                            className="rounded-full min-h-[250px] min-w-[250px]"
                        />
                        <Input type="file" className="cursor-pointer" onChange={updateImage} />
                    </div>
                    <div className="grid pt-5">
                        <div className="text-lg">Start a new group</div>
                        <div className="self-end pb-2">My group shall be called…</div>
                        <Input type="text" placeholder="Group name" />
                        <Button type="submit" className="self-end">
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </main>
    )
}
