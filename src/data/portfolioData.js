import JusticeImg from '../assets/JusticeMockup.png'
import CampQImg from '../assets/CampQMockup.png'
import NookPhoneImg from '../assets/NookPhoneMockup.png'
import WatchListImg from '../assets/WatchListMockup.png'
import RatatouilleImg from '../assets/RatatouilleMockup.png'

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

const data = [
    {
      id: 1,
      image: JusticeImg,
      title: "Justice",
      stack: [
        <h4>Front-end:</h4>,
        <p>JavaScript, HTML5, CSS, Sass</p>,
        <h4>Back-end:</h4>,
        <p>Ruby on Rails</p>,
        <p>Others:</p>,
        <p>Postgres, Redis, Heroku, Figma</p>
      ],
      github: "https://github.com/AidanFournier/justice",
      site: "https://justice-app.herokuapp.com/",
      content: {
        description: "🚧 Link is currently broken due to Heroku's change in service plans. 🚧 Evidence-collecting app for victims of abuse. Users can document incidents, generate police reports in Japanese, and connect with other users who have the same abuser using facial-recognition technology.",
        role: "As the lead Front-End Developer for this project, I had to think about how to design the app with mobile-first function in mind. I challenged myself by learning how to use Stimulus.js and create wireframes on Figma."
      }
    },
    {
      id: 2,
      image: CampQImg,
      title: "CampQ",
      stack: [
        <h4>Front-end:</h4>,
        <p>JavaScript, HTML5, CSS, Sass, Bootstrap</p>,
        <h4>Back-end:</h4>,
        <p>Ruby on Rails</p>,
        <p>Others:</p>,
        <p>Postgres, Redis, Heroku, Figma</p>
      ],
      github: "https://github.com/AidanFournier/CampQ",
      site: "https://campq.herokuapp.com/",
      content: {
        "description": "🚧 Link is currently broken due to Heroku's change in service plans. 🚧 A marketplace app for renting or lending camping gear. My team built this MVC app in two weeks. We used the Cloudinary and Mapbox APIs as well as the JS plugin Flatpickr.",
        "role": "As the Project Manager, I learned invaluable skills in organizing my team and communicating with them using platforms such as Slack, Trello, and Github."
      }
    },
    {
      id: 3,
      image: NookPhoneImg,
      title: "NookPhone",
      stack: [
        <h4>Front-end:</h4>,
        <p>React, JavaScript, HTML5, CSS, Sass</p>,
        <p>Others:</p>,
        <p>Netlify, Postman, Figma, Canva</p>
      ],
      github: "https://github.com/AidanFournier/acnh-nook-phone",
      site: "https://acnh-nookphone.com/",
      content: {
        description: "This mobile-first application provides gameplay support for Animal Crossing New Horizons. You can search for any existing character in the ACNH franchise and discover their appearance, their personal info such as birthday, and the interior/exterior design of their house.",
        role: "This is my first independent project built with React.js. Along with using hooks for State and Effect, I challenged myself by using Axios to support the API calls in the app."
      }
    },
    {
      id: 4,
      image: WatchListImg,
      title: "WatchList",
      stack: [
        <h4>Front-end:</h4>,
        <p>JavaScript, HTML5, CSS, Sass, Bootstrap</p>,
        <h4>Back-end:</h4>,
        <p>Ruby on Rails</p>,
        <p>Others:</p>,
        <p>Postgres, Render, Figma, Postman</p>
      ],
      github: "https://github.com/AidanFournier/justice",
      site: "https://watchlist-yhqh.onrender.com/",
      content: {
        description: "Create lists of your favourite movies and share them with your friends.",
        role: "This project taught me how to host my site on Heroku and host images using Cloudinary, I recently switched it to Render for hosting."
      }
    },
    {
      id: 5,
      image: RatatouilleImg,
      title: "Ratatouille",
      stack: [
        <h4>Front-end:</h4>,
        <p>React, Emotion, Storybook</p>,
        <p>Others:</p>,
        <p>Netlify, Postman, Figma, Canva</p>
      ],
      github: "https://github.com/AidanFournier/ratatouille",
      site: "https://chic-pegasus-d27631.netlify.app/restaurants/",
      content: {
        description: "Search for your new favourite restaurant in Tokyo using Ratatouille, a responsive app built with React and Emotion.",
        role: "This front-end project, completed in 7 days, challenged me to build upon an existing codebase using React, Emotion & components created in Storybook. I used endpoints from the TableCheck API for the search function and the Mapbox API for displaying pinned locations."
      }
    }
  ]

  export default data;