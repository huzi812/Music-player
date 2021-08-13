import React from 'react';
import './styles/app.scss';
//importing componenets
import Player from "./componenets/Player";
import Song from "./componenets/Song";

function App() {
  
  return (
    <div className="App">
      <Song />
     <Player />
    </div>
  );
}

export default App;
