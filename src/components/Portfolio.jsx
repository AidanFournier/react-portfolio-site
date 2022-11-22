import React from 'react'
import JusticeImg from '../assets/JusticeMockup.png'
import CampQImg from '../assets/CampQMockup.png'
import NookPhoneImg from '../assets/NookPhoneMockup.png'
import WatchListImg from '../assets/WatchListMockup.png'

import { DiRor } from 'react-icons/di'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { SiRedis } from 'react-icons/si'
import { SiHeroku } from 'react-icons/si'
import { SiFigma } from 'react-icons/si'
import { SiCanva } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'
import { GoBrowser } from 'react-icons/go'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: JusticeImg,
    title: 'Justice',
    stack: [
      <p>The tech stack:</p>,
      <span><DiRor /></span>,
      <span><FaJsSquare /></span>,
      <span><FaHtml5 /></span>,
      <span><FaCss3Alt /></span>,
      <span><FaSass /></span>,
      <span><SiPostgresql /></span>,
      <span><SiRedis /></span>,
      <span><SiHeroku /></span>,
      <span><SiFigma /></span>
    ],
    github: "https://github.com/AidanFournier/justice",
    site: "https://www.wearejustice.life/",
    content: {
      description: 'Evidence-collecting app for victims of abuse. Users can document incidents, generate police reports in Japanese, and connect with other users who have the same abuser using facial-recogntion technology.',
      role: 'As the lead Front-End Developer for this project, I had to think about how to design the app with mobile-first function in mind. I challenged myself by learning how to use Stimulus.js and create wireframes on Figma.'
    }
  },
  {
    id: 2,
    image: CampQImg,
    title: 'CampQ',
    stack: [
      <p>The tech stack:</p>,
      <span><DiRor /></span>,
      <span><FaJsSquare /></span>,
      <span><FaHtml5 /></span>,
      <span><FaCss3Alt /></span>,
      <span><FaBootstrap /></span>,
      <span><FaSass /></span>,
      <span><SiPostgresql /></span>,
      <span><SiRedis /></span>,
      <span><SiHeroku /></span>,
      <span><SiFigma /></span>
    ],
    github: "https://github.com/AidanFournier/CampQ",
    site: "https://campq.herokuapp.com/",
    content: {
      description: 'A marketplace app for renting or lending camping gear. My team built this MVC app in two weeks. We used the Cloudinary and Mapbox APIs as well as the JS plugin Flatpickr.',
      role: 'As the Project Manager, I learned invaluable skills in organizing my team and communicating with them using platforms such as Slack, Trello, and Github.'
    }
  },
  {
    id: 3,
    image: NookPhoneImg,
    title: 'NookPhone',
    stack: [
      <p>The tech stack:</p>,
      <span><SiReact /></span>,
      <span><FaJsSquare /></span>,
      <span><FaHtml5 /></span>,
      <span><FaCss3Alt /></span>,
      <span><FaSass /></span>,
      <span><SiFigma /></span>,
      <span><SiCanva /></span>
    ],
    github: "https://github.com/AidanFournier/acnh-nook-phone",
    site: "https://acnh-nookphone.com/",
    content: {
      description: 'This mobile-first application provides gameplay support for Animal Crossing New Horizons.',
      role: 'This is my first independent project built with React.js. Along with using hooks for State and Effect, I challenged myself by using Axios to support the API calls in the app.'
    },
  },
  {
    id: 4,
    image: WatchListImg,
    title: 'WatchList',
    stack: [
      <p>The tech stack:</p>,
      <span><DiRor /></span>,
      <span><FaJsSquare /></span>,
      <span><FaHtml5 /></span>,
      <span><FaCss3Alt /></span>,
      <span><FaBootstrap /></span>,
      <span><FaSass /></span>,
      <span><SiPostgresql /></span>,
      <span><SiHeroku /></span>,
      <span><SiFigma /></span>
    ],
    github: "https://github.com/AidanFournier/justice",
    site: "https://www.wearejustice.life/",
    content: {
      description: 'Create lists of your favourite movies and share them with your friends.',
      role: 'This project taught me how to host my site on Heroku and host images on Cloudinary.'
    }
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, site, content, stack}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className="title__container">
                  <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <h3><a href={github} target="_blank" rel="noreferrer"><FiGithub /></a></h3>
                  <h3><a href={site} target="_blank" rel="noreferrer"><GoBrowser /></a></h3>
                </div>
                </div>

                <Swiper
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  spaceBetween={50}
                  className="portfolio__swiper mySwiper">
                {
                  <div>
                    <SwiperSlide id={id}>
                      <p>{content.description}</p>
                    </SwiperSlide>
                    <SwiperSlide id={id}>
                      <p>{content.role}</p>
                    </SwiperSlide>
                    <SwiperSlide id={id}>
                      <p>{stack}</p>
                    </SwiperSlide>
                  </div>
                }
                </Swiper>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio