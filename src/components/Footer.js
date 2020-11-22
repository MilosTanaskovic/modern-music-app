import React from 'react'

const Footer = (props) => {
 const { FontAwesomeIcon, faCopyright, faTrademark } = props
 return (
  <div>
   <p>Copyright 
    <FontAwesomeIcon icon={faCopyright}/>  
    2020 * Stockholm, Sweden 
    <FontAwesomeIcon icon={faTrademark}/> 
    Dancing With The React | Powered by @codedancing</p>
  </div>
 )
}

export default Footer
