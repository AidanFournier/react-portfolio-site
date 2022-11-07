import React from 'react'
import JusticeImg from '../assets/JusticeMockup.png'
import CampQImg from '../assets/CampQMockup.png'
import NookPhoneImg from '../assets/NookPhoneMockup.png'
import WatchListImg from '../assets/WatchListMockup.png'

const data = [
  {
    id: 1,
    image: JusticeImg,
    title: 'Justice',
    github: "https://github.com/AidanFournier/justice",
    site: "https://www.wearejustice.life/"
  },
  {
    id: 2,
    image: CampQImg,
    title: 'CampQ',
    github: "https://github.com/AidanFournier/CampQ",
    site: "https://campq.herokuapp.com/"
  },
  {
    id: 3,
    image: NookPhoneImg,
    title: 'NookPhone',
    github: "https://github.com/AidanFournier/acnh-nook-phone",
    site: "https://acnh-nookphone.com/"
  },
  {
    id: 4,
    image: WatchListImg,
    title: 'WatchList',
    github: "https://github.com/AidanFournier/justice",
    site: "https://www.wearejustice.life/"
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