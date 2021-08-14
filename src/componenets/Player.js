import React, {useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong}) => {
    //ref
    const audioRef= useRef(null);
 //event handlers
 const playSongHandler = ()=>{
console.log(audioRef);
 }

    return (


        <div className="player">
            <div className="time-control">
                <p>start time</p>
                <input type="range" />
                <p>end time</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon size='2x' className="skipBack" icon={faAngleLeft} />
                <FontAwesomeIcon  onClick={playSongHandler}  size='2x'className="play" icon={faPlay} />
                <FontAwesomeIcon size='2x' className="skipForward" icon={faAngleRight} />

                <audio ref= {audioRef} src={currentSong.audio}></audio>
            </div>
        </div>
    );
};
export default Player;