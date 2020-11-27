import React from 'react'
// import font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
 const { libraryState, setLibraryState} = props;
 return (
  <nav onClick={() => setLibraryState(!libraryState)}>
   <h1>Modern Music App</h1>
   <button>
    Library
    <FontAwesomeIcon  icon={faMusic} />
   </button>
  </nav>
 )
}

export default Nav
