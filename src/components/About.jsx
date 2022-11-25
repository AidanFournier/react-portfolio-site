import React from 'react'
import Me from '../assets/me-about.jpg'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { BiGitBranch } from 'react-icons/bi'
import { GoBrowser } from 'react-icons/go'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const aboutData = [
  {
    id: 1,
    content: "I am a fullstack developer specializing in Ruby on Rails and React applications. I enjoy writing clean code and designing websites with an eye for aesthetics."
  },
  {
    id: 2,
    content: "I studied Biological Anthropology and Archaeology in university and for the past 5 years I have been working in childhood education. I use my unconventiional background to give me a unique approach and perspective to coding."
  },
  {
    id: 3,
    content: "In my free time, I enjoy camping and hiking. I am also a dedicated cat mom to Tanuki and cat auntie to the members of the local shelter."
  }
]

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

        <div className="about__content">
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

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={50}
            className="about__swiper mySwiper">
          {
            aboutData.map(({id, content}) => {
              return (
                <SwiperSlide id={id}>
                  <p>{content}</p>
                </SwiperSlide>
              )
            })
          }
          </Swiper>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About