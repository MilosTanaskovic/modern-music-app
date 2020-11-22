import React from 'react'

const Player = (props) => {
 const { FontAwesomeIcon, faPlay, faAngleLeft, faAngleRight } = props
 return (
  <div className="player__container">
   <div className="time-control">
    <p>Strat Time</p>
    <input type="range" name="" id=""/>
    <p>End Time</p>
   </div>
   <div className="play-control">
    <FontAwesomeIcon size="2x" icon={faAngleLeft}/>
    <FontAwesomeIcon size="2x" icon={faPlay}/>
    <FontAwesomeIcon size="2x" icon={faAngleRight}/>
   </div>
   
  </div>
 )
}

export default Player
