import React, { useState } from 'react'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const targetEmail = import.meta.env.VITE_CONTACT_EMAIL || 'your.email@example.com' // set `VITE_CONTACT_EMAIL` in .env to override

  function handleSubmit(e){
    e.preventDefault()
    const mailSubject = subject || `Message from ${name || 'website visitor'}`
    const mailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${message}`
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-box">
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" />
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="Phone Number" />
            <input value={subject} onChange={e => setSubject(e.target.value)} type="text" placeholder="Subject" />
          </div>
        </div>
        <div className="input-group-2">
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message" cols="30" rows="10" />
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
      <p style={{textAlign: 'center', marginTop: '1rem', fontSize: '1.2rem'}}>
        This will open your default email client to send the message. To set your contact address, create a `.env` file and add <code>VITE_CONTACT_EMAIL=you@example.com</code>, then restart the dev server.
      </p>
    </section>
  )
}
