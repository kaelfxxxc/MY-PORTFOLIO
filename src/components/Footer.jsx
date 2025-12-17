import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#"><i className="bx bx1-github" /></a>
        <a href="#"><i className="bx bx1-youtube" /></a>
        <a href="#"><i className="bx bx1-facebook-alt" /></a>
      </div>
      <ul className="li">
        <li><a href="#">FAQ</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p className="copyright">© Alvin Beldad | All Rights Reserved 2025</p>
    </footer>
  )
}
