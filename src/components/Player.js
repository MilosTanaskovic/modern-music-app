import React, { useEffect} from 'react'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';

const Player = (props) => {
 const {audioRef, FontAwesomeIcon, faPlay, faPause, faAngleLeft, faAngleRight, currentSong, isPlaying, setIsPlaying, setInfoSong, infoSong, songs, setSongs, setCurrentSong } = props
 
 useEffect(() => {
   const activeSong = songs.map((song) => {
    if( song.id === currentSong.id ) {
      return {
        ...song,
        active: true
      }
    } else {
      return {
        ...song,
        active: false
      }
    }
  });
  setSongs(activeSong);
 }, [currentSong])
 // Handlers
 const playSongHandler = () => {
  if(isPlaying){
   audioRef.current.pause();
   setIsPlaying(!isPlaying);
  }else{
   audioRef.current.play();
   setIsPlaying(!isPlaying);
  }
 }
 
 const dragHandler = (e) => {
  audioRef.current.currentTime = e.target.value
  setInfoSong({...infoSong, currentTime: e.target.value});
 }
 function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
// Skip Back and Forward
const skipTrackHandler = async (direction) => {
 const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  if(direction === 'skip-forward'){
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]); 
  }
  if(direction === 'skip-back'){
    if((currentIndex - 1) % songs.length === -1){
      setCurrentSong(songs[songs.length - 1]);
       if (isPlaying) audioRef.current.play();
      return;
    }
    setCurrentSong(songs[(currentIndex - 1) % songs.length]);
  }
  if (isPlaying) audioRef.current.play();
}
// Add the style
const trackAnim = {
  transform: `translateX(${infoSong.animationPercentage}%)`
}
 return (
  <div className="player__container">
   <div className="time-control">
    <p>{getTime(infoSong.currentTime)}</p>
    <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]} )`}} className="track">
      <input 
        onChange={dragHandler}
        min={0}
        max={infoSong.duration || 0}
        value={infoSong.currentTime}
        type="range" 
        name="" 
        id=""
      />
      <div style={trackAnim} className="animate-track"></div>
    </div>
    
    <p>{getTime(infoSong.duration)}</p>
   </div>
   <div className="play-control">
    <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="play-back" size="2x" icon={faAngleLeft}/>
    <FontAwesomeIcon 
    onClick={playSongHandler} 
    className="play" 
    size="2x" 
    icon={isPlaying ? faPause : faPlay}
    />
    <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="play-forward" size="2x" icon={faAngleRight}/>
   </div>
   
  </div>
 )
}

export default Player
