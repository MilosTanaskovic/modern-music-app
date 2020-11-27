import React, { useState} from 'react'

const Player = (props) => {
 const {audioRef, FontAwesomeIcon, faPlay, faPause, faAngleLeft, faAngleRight, currentSong, isPlaying, setIsPlaying, setInfoSong, infoSong, songs } = props
 
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
const skipTrackHandler = (direction) => {
  const currentIndex = songs.findIndex((song) => song.id = currentSong.id);
  console.log(currentIndex);
}

 return (
  <div className="player__container">
   <div className="time-control">
    <p>{getTime(infoSong.currentTime)}</p>
    <input 
    onChange={dragHandler}
    min={0}
    max={infoSong.duration || 0}
    value={infoSong.currentTime}
    type="range" 
    name="" 
    id=""/>
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
