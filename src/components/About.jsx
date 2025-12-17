import React from 'react'

export default function About(){
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/image.jpg" alt="About" />
      </div>
      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <p>Hi, I'm Alvin Beldad. As a current student deeply immersed in my studies, I am passionately pursuing my dream of becoming a software developer. Each day, The thrill of solving complex problem. Aside from studying about programming i also do Barbering, Android Repair aslo a Part timer in Maxim.</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  )
}
