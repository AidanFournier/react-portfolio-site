import React from 'react'
import { MdOutlineMail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>aidan.douglas.fournier@gmail.com</h5>
            <a href="mailto:aidan.douglas.fournier@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email address" required />
          <textarea name="message" rows="7" placeholder="Your message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact