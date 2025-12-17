import React from 'react'

const techStack = [
  { name: 'HTML', color: '#E34C26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'MySQL', color: '#005C84' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'MariaDB', color: '#003545' }
]

export default function Services(){
  return (
    <section className="services" id="services">
      <h2 className="heading">Tech Stack</h2>
      <div className="services-container">
        {techStack.map((tech, i) => (
          <div className="service-box" key={i}>
            <div className="service-info">
              <svg width="80" height="80" viewBox="0 0 100 100" style={{marginBottom: '1rem'}}>
                <rect width="100" height="100" fill={tech.color}/>
                <text x="50" y="60" fill="white" fontSize="28" fontWeight="bold" textAnchor="middle" dy=".3em">
                  {tech.name.substring(0, 3)}
                </text>
              </svg>
              <h4>{tech.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
