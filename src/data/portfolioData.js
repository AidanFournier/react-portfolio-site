import JusticeImg from '../assets/JusticeMockup.png'
import CampQImg from '../assets/CampQMockup.png'
import NookPhoneImg from '../assets/NookPhoneMockup.png'
import WatchListImg from '../assets/WatchListMockup.png'
import RatatouilleImg from '../assets/RatatouilleMockup.png'
import ProNefImg from '../assets/ProNefMockup.png'
import GoToTravelImg from '../assets/Go To Travel Mockup.png'

const data = [
    {
      id: 1,
      image: GoToTravelImg,
      title: "Go To Travel",
      stack: [
        <h4>Front-end:</h4>,
        <p>React Native, Tailwind</p>,
        <h4>APIs:</h4>,
        <p>Google Places, Travel Advisor</p>,
        <p>Others:</p>,
        <p>Expo</p>
      ],
      github: "https://github.com/AidanFournier/go-to-travel",
      site: "https://main--legendary-faun-08a27a.netlify.app/",
      content: {
        description: "A mobile app to help you discover hotels, restaurants, and attractions in cities across Japan. Inspired by Japan's much loved discount travel campaign that promotes tourism within the country.",
        role: "This native app has a clean design and is responsive to all devices. I challenged myself with this project by connecting data points from two different APIs."
      }
    },
    {
      id: 2,
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
      id: 3,
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
        role: "This project taught me how to host my site on Heroku and host images using Cloudinary. I recently switched it to Render for hosting."
      }
    },
    {
      id: 4,
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
    },
    {
      id: 5,
      image: ProNefImg,
      title: "ProNef",
      stack: [
        <h4>Front-end:</h4>,
        <p>React Native</p>,
        <p>Others:</p>,
        <p>Expo, Netlify</p>
      ],
      github: "https://github.com/AidanFournier/react-native-nft-marketplace",
      site: "https://main--timely-sprinkles-804231.netlify.app/",
      content: {
        description: "Browse and search for your favourite NFTs on this marketplace app. Made for both IOS and Android devices.",
        role: "This is my first project built with React Native. I focused on creating reusable components and used React Native's  FlatList, ScrollView, SafeAreaView, StatusBar, and more."
      }
    },
    {
      id: 6,
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
      id: 7,
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
    }
  ]

  export default data;