import React from 'react'
import JusticeImg from '../assets/JusticeMockup.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={JusticeImg} alt="Justice mockup" />
          </div>
          <h3>Justice</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AidanFournier/justice" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.wearejustice.life/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={JusticeImg} alt="Justice mockup" />
          </div>
          <h3>Justice</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AidanFournier/justice" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.wearejustice.life/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={JusticeImg} alt="Justice mockup" />
          </div>
          <h3>Justice</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AidanFournier/justice" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.wearejustice.life/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={JusticeImg} alt="Justice mockup" />
          </div>
          <h3>Justice</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AidanFournier/justice" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.wearejustice.life/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio