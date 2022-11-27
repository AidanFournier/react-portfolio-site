import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Aidan Fournier</title>
        <meta property="og:title" content="Aidan Fournier | Fullstack Developer" />
        <meta property="og:description" content="Find out a little about me and my recent projects." />
        <meta property="og:image" content="./assets/SocialMediaCard.png" />
        <meta property="og:url" content="https://aidanfournier.com/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Aidan Fournier | Fullstack Developer" ></meta>
      </Helmet>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App