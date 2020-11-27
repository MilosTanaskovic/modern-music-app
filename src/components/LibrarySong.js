import React from 'react'

function LibrarySong(props) {
 const { song, songs, setSongs, setCurrentSong, id, audioRef, isPlaying } = props

 const selectedSongHandler = () => {
  const selectedSong = songs.filter((state) => state.id === id);
  setCurrentSong(selectedSong[0]);
  // How to Select/Add Active Song
  const activeSong = songs.map((song) => {
    if( song.id === id ) {
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
 
  
  // check is the song is playing
  if(isPlaying) {
   const playPromise = audioRef.current.play();
   if(playPromise !== undefined){
     playPromise.then((audio) => {
     audioRef.current.play();
    })
   }
  }
  audioRef.current.play();
 }
 return (
  <div onClick={selectedSongHandler} className={`library__song ${song.active ? 'selected' : ''}`}>
   <img src={song.cover} alt=""/>
   <div className="song__description">
    <h3>{song.artist}</h3>
    <h4>{song.name}</h4>
   </div>
  </div>
 )
}

export default LibrarySong
