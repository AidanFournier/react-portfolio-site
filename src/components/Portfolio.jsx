import React from 'react'
import JusticeImg from '../assets/JusticeMockup.png'
import CampQImg from '../assets/CampQMockup.png'
import NookPhoneImg from '../assets/NookPhoneMockup.png'
import WatchListImg from '../assets/WatchListMockup.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    image: JusticeImg,
    title: 'Justice',
    github: "https://github.com/AidanFournier/justice",
    site: "https://www.wearejustice.life/",
    content: {
      stack: 'Ruby on Rails',
      description: 'Evidence-collecting app for victims of abuse. Users can document incidents, generate police reports in Japanese, and connect with other users who have the same abuser using facial-recogntion technology.',
      role: 'As the lead Front-End Developer for this project, I had to think about how to design the app with mobile-first function in mind. I challenged myself by learning how to use Stimulus.js and create wireframes on Figma.'
    }
  },
  {
    id: 2,
    image: CampQImg,
    title: 'CampQ',
    github: "https://github.com/AidanFournier/CampQ",
    site: "https://campq.herokuapp.com/",
    content: {
      stack: 'Ruby on Rails',
      description: 'A marketplace app for renting or lending camping gear. My team built this MVC app in two weeks. We used the Cloudinary and Mapbox APIs as well as the JS plugin Flatpickr.',
      role: 'As the Project Manager, I learned invaluable skills in organizing my team and communicating with them using platforms such as Slack, Trello, and Github.'
    }
  },
  {
    id: 3,
    image: NookPhoneImg,
    title: 'NookPhone',
    github: "https://github.com/AidanFournier/acnh-nook-phone",
    site: "https://acnh-nookphone.com/",
    content: {
      stack: 'React',
      description: 'This mobile-first application provides gameplay support for Animal Crossing New Horizons.',
      role: 'This is my first independent project built with React.js. Along with using hooks for State and Effect, I challenged myself by using a library called Axios to support the API calls in the app.'
    }
  },
  {
    id: 4,
    image: WatchListImg,
    title: 'WatchList',
    github: "https://github.com/AidanFournier/justice",
    site: "https://www.wearejustice.life/",
    content: {
      stack: 'Ruby on Rails',
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
          data.map(({id, image, title, github, site}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
                  <a href={site} className="btn btn-primary" target="_blank" rel="noreferrer">Site</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio