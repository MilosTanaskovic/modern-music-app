import React, {useState} from 'react'
// import font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight, faCopyright, faTrademark} from '@fortawesome/free-solid-svg-icons'
// import data
import data from './data/data';

// import components
import Song from './components/Song';
import Player from './components/Player';
import Footer from './components/Footer'

// import styling
import './style/App.css'
import './App.scss';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <h1>Modern Music Player</h1>
      <h3>Dancing With The React!</h3>
      <Song currentSong={currentSong}/>
      <Player
        FontAwesomeIcon={FontAwesomeIcon}
        faPlay={faPlay}
        faPause={faPause}
        faAngleLeft={faAngleLeft}
        faAngleRight={faAngleRight}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Footer  
        FontAwesomeIcon={FontAwesomeIcon} 
        faCopyright={faCopyright}
        faTrademark={faTrademark}
      />
    </div>
  );
}

export default App;
