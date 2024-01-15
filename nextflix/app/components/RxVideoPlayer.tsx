'use client'

import { Button } from "@/components/ui/button"
import RxPlayer from "rx-player"

export default function RxVideoPlayer() {

    const player = new RxPlayer()

    const videoElement = player.getVideoElement();
    document.body.appendChild(videoElement as HTMLVideoElement);

    if(player){
        console.log('player found')
        player.loadVideo({
            url: "https://assets.mixkit.co/videos/preview/mixkit-man-focused-on-study-for-exam-in-library-9049-large.mp4",
            transport: "dash",
        })
        console.log('video loaded')
    } else {
        console.log('player not found')
    }

    return (
        <div>
            <h1>RxPlayerComponent</h1>
            <video></video>
            <Button onClick={()=>{player.play()}}>Play Video</Button>
        </div>
    )
}
