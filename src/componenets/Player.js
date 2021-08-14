import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    //state
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    });
    //ref
    const audioRef = useRef(null);
    //event handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration })
    }
    //time formating

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }



    return (


        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon size='2x' className="skipBack" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} size='2x' className="play" icon={faPlay} />
                <FontAwesomeIcon size='2x' className="skipForward" icon={faAngleRight} />

                <audio onTimeUpdate={timeUpdateHandler}
                    onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
            </div>
        </div>
    );
};
export default Player;