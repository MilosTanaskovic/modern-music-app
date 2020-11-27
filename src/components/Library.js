import React from 'react'
// import components
import LibrarySong from './LibrarySong';

function Library(props) {
 const { songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryState } = props
 return (
  <div className={`library ${libraryState ? 'active__library' : ''}`}>
   <h2>Library</h2>
   <div className="library__songs">
    { songs.map((song) => (
       <LibrarySong 
       song={song} 
       songs={songs}
       setSongs={setSongs}
       setCurrentSong={setCurrentSong}
       id={song.id}
       key={song.id}
       audioRef={audioRef}
       isPlaying={isPlaying}
      />
    ))} 
   </div>
  </div>
 )
}

export default Library
