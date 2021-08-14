import React, { useState } from 'react';
import './styles/app.scss';
//importing componenets
import Player from "./componenets/Player";
import Song from "./componenets/Song";
import data from "./util";

function App() {
  //state
  const  [songs, setSongs] = useState(data());
  const  [currentSong, setcurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying]= useState(false);
  
  return (
    <div className="App">
      <Song currentSong={currentSong} />
     <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
    
    </div>
  );
}

export default App;
