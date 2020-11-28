import React, {useState, useRef} from 'react'
// import font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight, faCopyright, faTrademark} from '@fortawesome/free-solid-svg-icons'
// import data
import data from './data/data';

// import components
import Nav from './components/Nav';
import Song from './components/Song';
import Player from './components/Player';
import Footer from './components/Footer'
import Library from './components/Library';

// import styling
import './style/App.css'
import './App.scss';

function App() {
  // Ref
 const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [infoSong, setInfoSong] = useState({
  currentTime: 0,
  duration: 0,
  animationPercentage: 0
 })
 const [libraryState, setLibraryState] = useState(false);
 // Func
 const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  // Calculate Percentage
  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animationPercentage = Math.round((roundedDuration / roundedCurrent) * 100);
  setInfoSong({ ...infoSong, currentTime: current, duration, animationPercentage } );
  
 }
  return (
    <div className={`App ${libraryState ? 'library-active' : ''}`}>
    {
      //  <h1>Modern Music Player</h1>
      // <h3>Dancing With The React!</h3>
    }
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />
      <Song currentSong={currentSong}/>
      <Player
        audioRef={audioRef}
        FontAwesomeIcon={FontAwesomeIcon}
        faPlay={faPlay}
        faPause={faPause}
        faAngleLeft={faAngleLeft}
        faAngleRight={faAngleRight}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setInfoSong={setInfoSong}
        infoSong={infoSong}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library 
      songs={songs}
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
      audioRef={audioRef}
      isPlaying={isPlaying}
      libraryState={libraryState}
      />
      <audio 
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}>
      </audio>
      <Footer  
        FontAwesomeIcon={FontAwesomeIcon} 
        faCopyright={faCopyright}
        faTrademark={faTrademark}
      />

    </div>
  );
}

export default App;
