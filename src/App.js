import React from 'react'
// import font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faCopyright, faTrademark} from '@fortawesome/free-solid-svg-icons'

// import components
import Song from './components/Song';
import Player from './components/Player';
import Footer from './components/Footer'

// import styling
import './style/App.css'
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Modern Music Player</h1>
      <h3>Dancing With The React!</h3>
      <Song/>
      <Player
        FontAwesomeIcon={FontAwesomeIcon}
        faPlay={faPlay}
        faAngleLeft={faAngleLeft}
        faAngleRight={faAngleRight}
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
