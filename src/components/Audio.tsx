import { upload } from "@testing-library/user-event/dist/upload";
import PlayIcon from "./images/PlayIconAssetLams.svg"
import PauseIcon from "./images/pause.png"
import { IAudio, IAudioProps } from "./types";
import React from "react";
import audioImg from "../components/images/new_yam_img.jpeg";



function AudioComponent({id, title, audio, date, narration, click, idPlaying }: IAudioProps) {
    return (
            <div className="card">
                {/* <audio id={`audio-${id}`} src={audio}></audio> */}

                <div className="card-image-desc">
                <img src={audioImg} 
                width="100%"
                />
                </div>

                <div className="card-des">
                    <div>
                    <div className="card-title">{title} </div>
                  <div className="card-date">{date} </div>
                  <div className="card-narration">{narration} </div>
                    </div>
                 
                  <div>

                  <div 
                  className="play-icon-wrapper"
                  onClick={() => click(id)}
                  >
                <audio id={`audio-${id}`} src={audio}></audio>
                  <i className={`play-icon fa-solid ${idPlaying === id ? "fa-pause" : "fa-play"}`}></i>

                  </div>
                  </div>

                </div>
                
        </div>

    )
}

export default AudioComponent;