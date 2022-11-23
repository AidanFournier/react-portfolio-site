import React from 'react'
import data from '../data/portfolioData'

import { FiGithub } from 'react-icons/fi'
import { GoBrowser } from 'react-icons/go'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, site, content, stack} = data) => {
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