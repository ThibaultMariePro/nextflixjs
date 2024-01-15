'use client'

import { Button } from "@/components/ui/button"
import RxPlayer from "rx-player"

const localManifest : LOCAL_MANIFEST = 
    {
        type: "local", // always set to "local"
        version: "0.2", // version number, in a MAJOR.MINOR form
        minimumPosition: 0, // Minimum possible reachable position in the content,
                            // in seconds
        maximumPosition: 120, // Maximum possible reachable position in the content,
                              // in seconds
        isFinished: true, // if `false`, the content is still downloading
        periods: [ // different "periods" in the content - see below
          // ...
        ],
      }

export default function RxVideoPlayerLocal() {
    const player = new RxPlayer()
    const videoElement = player.getVideoElement();
    document.body.appendChild(videoElement as HTMLVideoElement);

    if(player){
        console.log('player found')
        player.loadVideo({
            url: '/videos/pexels-martin-sanchez-lava.mp4',
            transport: "local",
            transportOptions: {
                manifestLoader(_url, callbacks) {
                    callbacks.resolve({ data: LOCAL_MANIFEST });
                  },
            }
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
