import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Aidan Fournier</title>
        <meta name="title" content="Aidan Fournier | Fullstack Developer" />
        <meta name='description' content="Find out a little about me and my recent projects." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aidan Fournier | Fullstack Developer" />
        <meta property="og:description" content="Find out a little about me and my recent projects." />
        <meta property="og:image" content="./assets/SocialMediaCard.png" />
        <meta property="og:url" content="https://aidanfournier.com/" />
        <meta property="og:site_name" content="Aidan Fournier | Fullstack Developer" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aidanfournier.com/" />
        <meta property="twitter:creator" content="Aidan Fournier" />
        <meta property="twitter:title" content="Aidan Fournier | Fullstack Developer" />
        <meta property="twitter:description" content="Find out a little about me and my recent projects." />
        <meta property="twitter:image" content="./assets/SocialMediaCard.png" />
      </Helmet>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </HelmetProvider>
  )
}

export default App