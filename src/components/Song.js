import React from 'react'

const Song = (props) => {
 const {currentSong} = props;
 return (
  <div className="song__container">
   <img src={currentSong.cover} alt=""/>
   <h2>{currentSong.artist}</h2>
   <h3>{currentSong.name}</h3>
  </div>
 )
}

export default Song
