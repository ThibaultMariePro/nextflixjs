'use client'

import RxVideoPlayer from "@/app/components/RxVideoPlayer";
import RxVideoPlayerLocal from "@/app/components/RxVideoPlayerLocal";
import { Button } from "@/components/ui/button";

export default function MediaPage() {

    const player = RxVideoPlayer()

    return (
        <div>
            <h1>Media PLAYER</h1>
            <hr />
            <RxVideoPlayerLocal />
        </div>
    )
}
