import { upload } from "@testing-library/user-event/dist/upload";
import PlayIcon from "./images/PlayIconAssetLams.svg"
import PauseIcon from "./images/pause.png"
import { IAudio, IAudioProps } from "./types";
import React from "react";



function AudioComponent({id, title, idPlaying, audio, click }: IAudioProps) {
    return (
        <div >
            <h3>{title}</h3>
            <div className="card">
                <audio id={`audio-${id}`} src={audio}></audio>
                <div>
                    <img src={idPlaying === id ? PauseIcon : PlayIcon}
                        alt="play-pause-icon"
                        width="70px"
                        onClick={() => click(id)}
                    />
                </div>
            </div>

        </div>

    )
}

export default AudioComponent;