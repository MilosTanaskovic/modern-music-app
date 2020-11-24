import React from 'react'

function LibrarySong(props) {
 const { song } = props
 return (
  <div className="library__song">
   <img src={song.cover} alt=""/>
   <div className="song__description">
    <h3>{song.artist}</h3>
    <h4>{song.name}</h4>
   </div>
  </div>
 )
}

export default LibrarySong
