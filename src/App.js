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


  return (
    <div className="App">
      <Song currentSong={currentSong} />
     <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
