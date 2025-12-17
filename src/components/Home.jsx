import React from 'react'

export default function Home(){
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, im <span>Alvin</span></h1>
        <h3>I'm an <span>Aspiring Software Engineer</span></h3>
        <p>Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?’</p>
        <div className="social-icons">
          <a href="#"><i className="bx bx1-github" /></a>
          <a href="#"><i className="bx bx1-youtube" /></a>
          <a href="#"><i className="bx bx1-facebook-alt" /></a>
        </div>
        <div className="btn-group">
          <a href="#" className="btn">HIRE</a>
          <a href="#contact" className="btn">CONTACT</a>
        </div>
      </div>
      <div className="home-img">
        <img src="/image.jpg" alt="Alvin" />
      </div>
    </section>
  )
}
