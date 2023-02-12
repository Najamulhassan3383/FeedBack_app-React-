import PropTypes from 'prop-types'



import React from 'react'

function Header({text, bColor, ccolor}) {
    const cc = {
        color: ccolor, 
        backgroundColor: bColor
    }


  return (
    <header style={ cc}>
        <div className="container" >
            <h2>{text}</h2>
        </div>

      
    </header>
  )
}

Header.defaultProps = {
    text: "feedback UI",
    bColor: "rgba(0,0,0,0.5)",
    ccolor: "#ff6a95",

}

Header.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Header
