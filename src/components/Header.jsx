import React from 'react'

export default function Header(){
  return (
    <header className="header">
      <a href="#home" className="logo">Alvin <span>Beldad</span></a>
      <i className="bx bx-menu" id="menu-icon" />
      <nav className="navbar">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT ME</a>
        <a href="#services">SERVICES</a>
        <a href="#portfolio">PORTFOLIO</a>
      </nav>
      <button className="gradient-btn">CONTACT ME</button>
    </header>
  )
}
