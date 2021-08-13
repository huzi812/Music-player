import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = () => {

    return (


        <div className="player">
            <div className="time-control">
                <p>start time</p>
                <input type="range" />
                <p>end time</p>
            </div>
            <div className="play-control">

                <FontAwesomeIcon size='2x' className="skipBack" icon={faAngleLeft} />
                <FontAwesomeIcon   size='2x'className="play" icon={faPlay} />
                <FontAwesomeIcon size='2x' className="skipForward" icon={faAngleRight} />
            </div>
        </div>
    );
};
export default Player;