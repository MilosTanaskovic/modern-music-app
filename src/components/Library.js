import React from 'react'
// import components
import LibrarySong from './LibrarySong';

function Library(props) {
 const { songs } = props
 return (
  <div className="library">
   <h2>Library</h2>
   <div className="library__songs">
    { songs.map((song) => (
       <LibrarySong song={song}/>
    ))}
   
   </div>
  </div>
 )
}

export default Library
