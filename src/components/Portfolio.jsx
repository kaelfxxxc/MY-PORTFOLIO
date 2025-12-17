import React from 'react'

const cards = [
  {img: '/project1.png', title: 'Low Taper Fade', text: 'A low taper fade is a popular hairstyle characterized by a gradual transition from short to longer hair.'},
  {img: '/project2.png', title: 'Mid Fade', text: 'A mid fade features a gradual transition starting near the temples, versatile and modern.'},
  {img: '/project3.png', title: 'Modern Mullet', text: 'Contemporary mullet with texture and layering for a modern look.'},
  {img: '/project4.png', title: 'Mid Fade', text: 'A mid fade paired with various top styles for a fresh appearance.'},
  {img: '/project5.png', title: 'Android Repair', text: 'Services for fixing screens, batteries and other hardware issues.'},
  {img: '/project6.png', title: 'Maxim Rider', text: 'Part-time rider experience improving navigation and customer service skills.'}
]

export default function Portfolio(){
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Portfolio</h2>
      <div className="portfolio-box">
        {cards.map((c, i) => (
          <div className="portfolio-card" key={i}>
            <img src={c.img} alt={c.title} />
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <div className="btn">Review Works</div>
          </div>
        ))}
      </div>
    </section>
  )
}
