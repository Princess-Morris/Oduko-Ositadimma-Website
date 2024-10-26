import { useEffect, useState } from "react";
// import Audio from "./Audio";
import { mockData } from "./mockData";
import React from "react";
import { getAudioArray } from "./service";
import AudioComponent from "./Audio";

function AudioList() {

    const [idPlaying, setIdPlaying] = useState<string | undefined>(undefined);
    // const [audioArray, setaudioArray] = useState<any[]>([]);

    const audioArray = getAudioArray();

    // useEffect(() => {
    //     const audioArray = getAudioArray();
    //     setaudioArray(audioArray)
    // }, [])

    const playAudio = (audio_id:string) => {
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach((audioElement:HTMLAudioElement) => {
            audioElement.pause();
            audioElement.currentTime = 0;
        });
       

        if(audio_id === idPlaying){
            setIdPlaying(undefined)
            return
        }

        setIdPlaying(audio_id)

        const audioElement:HTMLAudioElement | null = document.querySelector(`#audio-${audio_id}`);
        if(audioElement !== null){
            audioElement.play()
        }
    }

    return (
        <div>
            <h2>Listen To Your Favorite Igbo books  </h2>
                <div className="cards">
                    {/* <AudioComponent id="some string" title="title" audio="string" click={()=> {console.log('come here')}} idPlaying="fjfj"  /> */}
                    {
                        audioArray.map((upload, i) => (
                            <AudioComponent 
                            key={i}
                            id={upload.id}
                            title={upload.title}
                            audio={upload.audio}
                            click={playAudio}
                            idPlaying={idPlaying}
                             />
                        ))
                    }
                </div>
        </div>
    )
}

export default AudioList;