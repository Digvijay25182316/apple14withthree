import React from 'react'
import IPhone from "../assets/images/iPhone-14.jpg"
import HoldinIphone from "../assets/images/iphone-hand.png"

function Jumbetron() {
  const handleLearnMore=()=>{
    const element =document.querySelector(".sound-section")
    window.scroll({top:element?.getBoundingClientRect().top,left:0,behavior:'smooth'})
  }
  return (
    <div className="jumbotron-section wrapper">
        <h1 className="title">New</h1>
        <img src={IPhone} alt="iPhone 14 pro" className="logo" />
        <p className="text">Big and bigger</p>
        <span className="description">From $41.62/mo. for 24mo. or $999 before trade-in</span>
        <ul className="links">
            <li>
                <button className="button">Buy</button>
            </li>
            <li>
                <a className="link" onClick={handleLearnMore}>Learn more</a>
            </li>
        </ul>
        <img src={HoldinIphone} alt="iphone" className="iphone-img" />
    </div>
  )
}

export default Jumbetron