import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    //state
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
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

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
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
                <input onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon size='2x' className="skipBack" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} size='2x' className="play" icon={isPlaying ? faPause :faPlay} />
                <FontAwesomeIcon size='2x' className="skipForward" icon={faAngleRight} />

                <audio onTimeUpdate={timeUpdateHandler}
                    onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
            </div>
        </div>
    );
};
export default Player;