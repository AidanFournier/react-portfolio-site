import React from 'react'
import Me from '../assets/me-about.jpg'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { BiGitBranch } from 'react-icons/bi'
import { GoBrowser } from 'react-icons/go'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Me" />
          </div>
        </div>

        <div  iv className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiCodeSSlashFill className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Coding</small>
            </article>

            <article className="about__card">
              <BiGitBranch className="about__icon"/>
              <h5>Projects</h5>
              <small>40+ repos</small>
            </article>

            <article className="about__card">
              <GoBrowser className="about__icon"/>
              <h5>Products</h5>
              <small>4 Live Sites</small>
            </article>
          </div>

          <p>
            I am a fullstack developer specializing in Ruby on Rails and React applications. I enjoy writing clean code and designing websites with an eye for aesthetics. 
          </p>
          <p> In my free time, I enjoy camping and hiking. I am also a dedicated cat mom and cat auntie (I volunteer at a local cat shelter every week).</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About