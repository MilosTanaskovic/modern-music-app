import React, {useRef, useState} from 'react'

const Player = (props) => {
 const { FontAwesomeIcon, faPlay, faPause, faAngleLeft, faAngleRight, currentSong, isPlaying, setIsPlaying } = props
 // State
 const [infoSong, setInfoSong] = useState({
  currentTime: 0,
  duration: 0
 })
 // Ref
 const audioRef = useRef(null);
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
 const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setInfoSong({ ...infoSong, currentTime: current, duration } );
  
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

 return (
  <div className="player__container">
   <div className="time-control">
    <p>{getTime(infoSong.currentTime)}</p>
    <input 
    onChange={dragHandler}
    min={0}
    max={infoSong.duration}
    value={infoSong.currentTime}
    type="range" 
    name="" 
    id=""/>
    <p>{getTime(infoSong.duration)}</p>
   </div>
   <div className="play-control">
    <FontAwesomeIcon className="play-back" size="2x" icon={faAngleLeft}/>
    <FontAwesomeIcon 
    onClick={playSongHandler} 
    className="play" 
    size="2x" 
    icon={isPlaying ? faPause : faPlay}
    />
    <FontAwesomeIcon className="play-forward" size="2x" icon={faAngleRight}/>
   </div>
   <audio 
    onLoadedMetadata={timeUpdateHandler} 
    onTimeUpdate={timeUpdateHandler} 
    ref={audioRef} 
    src={currentSong.audio}>
    </audio>
   
  </div>
 )
}

export default Player
