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
            I have a proven track record of writing clean code and designing websites with an eye for aesthetics. As a fullstack developer, I am experienced in building complete applications from the ground up. From my years as a teacher I have nurtured my skills in patience, organization, and mentoring - all of which are invaluable as a member of any team. 
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About