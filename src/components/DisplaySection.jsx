import React from 'react'

function DisplaySection({triggerPreview}) {
  const handleScroll=()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }
  return (
    <div className="display-section wrapper">
        <h2 className="title">New</h2>
        <p className="text">Brilliant</p>
        <span className="description">A display that's upto 2x briter in the sun</span>
        <button className="button" onClick={triggerPreview}>Try me!</button>
        <button className="back-button" onClick={handleScroll}>Top</button>
    </div>
  )
}

export default DisplaySection