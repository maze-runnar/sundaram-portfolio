import uuidv1 from 'uuid/v1';
import resume from './resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Sundaram Dubey', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sundaram Dubey',
  subtitle: 'I am a Full Stack Developer.',
  cta: 'More..',
};

// ABOUT DATA
export const aboutData = {
  img: 'sundaram.jpg',
  paragraphOne: "Hey, I am a Software Engineer at Swiggy",
  paragraphTwo: 'I love software development and more than that I love the challenges that comes in way. I am never settle only with a technology I know. I have always a keen interest to going out of my comfort zone and trying something out of the box.',
  paragraphThree: 'I am good At Data Structures and exploring machine learning with full stack development.',
  resume: resume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'scholar1.jpg',
    title: 'MyScholar',
    info: 'Google scholar is a metric computation system for researchers with a Google Scholar profile. Google Scholar provides researchers with stats such as the number of publications, citations, h-index and i10 index. But, these metrics are flawed. my Google Scholar extracts some basic information form Google Scholar and computes better metrics, and displays them on another website. So, researchers can now see better, effective metrics with a single click.',
    info2: 'And Scholarly implementation with website to get raw data with fast speed. The frontend for project is hosted on netlify and used DOCKER for quick client setup.',
    url:'https://friendly-poincare-d05cd9.netlify.app',
    repo: 'https://github.com/maze-runnar/Google-Scholar', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gitedge.png',
    title: 'GitEdge',
    info: 'A React native mobile application. Using github api V3. Currently the app is fetching User persional information(publicly available) as name , profile picture, email, following , followers , repositories and contribution details. It gives you a nicer look to your github profile and repo stats. It includes data visialization of your top languages, and starred repos. App is using react-native-chart-kit for this.',
    info2: '',
    url: 'https://expo.io/@mazerunner/gitedge',
    repo: 'https://github.com/maze-runnar/GitEdge', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'blogs.png',
    title: 'RedBlogs',
    info: 'A basic Blog platform made using ReactJs with Django API for backend. The website has authentication feature, responsive UI, and Dark-mode/Light-mode implementation. ',
    info2: 'The application uses react-redux for authentication purpose. And AntDesign UI framework.',
    url: 'https://github.com/maze-runnar/RedBlogs',
    repo: 'https://github.com/maze-runnar/RedBlogs', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'modal.png',
    title: 'Social-Share-Modal',
    info: 'This is a reusable modal component for social sharing. This project uses lit-element for making pure web component. It uses styled component for styling purpose, jest for testing and also story book integration to run a component outside of the application.',
    info2: '',
    url: 'https://github.com/maze-runnar/modal-component',
    repo: 'https://github.com/maze-runnar/modal-component', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'alca.png',
    title: 'Songslib',
    info: 'Songslib is an application that lets you upload, store, and play all of your music from the cloud. You can now manage and listen to your music from any device, anywhere in the world.',
    info2: 'The project is totally written in Django(frontend + backend). And uses postgres as database.',
    url: '',
    repo: 'https://github.com/maze-runnar/through-the-songs', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'touristhub.png',
    title: 'TouristHub',
    info: 'Social Networking platform for tourists and guides to interact. The platform for tourists to share their experience and get more reach by your passion. Write Blogs about places you visit, share your memories, interact with more peoples.',
    info2: 'The project is totally written in Django(frontend + backend). The application is hosted on heroku.',
    url: 'https://thetouristsguides.herokuapp.com/',
    repo: 'https://github.com/maze-runnar/thetourists', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'devpost.png',
    title: 'Acads',
    info: 'Facebook messenger chatbot with Python and Wit.AI integration. The project is a part of facebook messaging hackathon. The chatbot implements messengers Quick Reply feature and Generic Templates. The webhook for the messenger bot is live at https://themazerunner.herokuapp.com/',
    info2: '',
    url: 'https://devpost.com/software/scholar-articles',
    repo: 'https://github.com/maze-runnar/the-facebook-hackathon', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'env.png',
    title: 'API Orbital',
    info: 'Web application uses 5 different API with a flask APP. And Also a Dialogflow chat-bot assistant.',
    info2: '',
    url: 'http://envorbital.herokuapp.com/',
    repo: 'http://envorbital.herokuapp.com/', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'siciext.png',
    title: 'Sociext',
    info: 'This a mini project of a chrome extension with social media profiles. Add them and edit them. The project uses CSS for styling. ',
    info2: '',
    url: 'https://github.com/maze-runnar/socialext',
    repo: 'https://github.com/maze-runnar/socialext', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Gmail',
  email: 'dubeysundaram057@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'medium',
      url: 'https://medium.com/@dubesundaram99/',
    },
    {
      id: uuidv1(),
      name: 'gitlab',
      url: 'https://gitlab.com/maze-runnar',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sundaram-dubey/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/maze-runnar/',
    },
  ],
};

// SKILL DATA
export const skillData = [
  {
    id: uuidv1(),
    name: 'Django',
  },
  {
    id: uuidv1(),
    name: 'Flask',
  },
  {
    id: uuidv1(),
    name: 'React',
  },
  {
    id: uuidv1(),
    name: 'C++',
  },
  {
    id: uuidv1(),
    name: 'Problem Solving',
  },
  {
    id: uuidv1(),
    name: 'PostgreSQL',
  },
  {
    id: uuidv1(),
    name: 'Git',
  },
  {
    id: uuidv1(),
    name: 'Javascript',
  },
  {
    id: uuidv1(),
    name: 'Python',
  },
];

// EXPERIENCE DATA
export const worksData = [
  {
    date: '05/2021 – 07/2021',
    title: 'Google Summer of Code',
    company: 'Dial',
    points: [
      {
        data:"Worked as full stack developer",
      }
    ],
    location: 'Remote',
    link: "https://maze-runnar.github.io/"
  },
  {
    date: '01/2021 – 06/2021',
    title: 'Internship',
    company: 'Paytm',
    points: [
      {
        data:"Worked on IOT devices",
      }
    ],
    location: 'Remote',
    link: "https://maze-runnar.github.io/"
  },
  {
    date: '02/2020 – 02/2020',
    title: 'KWoC Mentor',
    company: 'IIT Kharagpur',
    points: [
      {
        data:"Reviewed 80+ pull requests and maintained the repository.",
      }
    ],
    location: 'Remote',
    link: "https://maze-runnar.github.io/interview-preparation-kit/"
  },
  {
    date: '01/2020 – 02/2020',
    title: 'Web Developer',
    company: 'Wikasta Business and private limited',
    points: [
      {
        data:
          "Contributed to their frontend build of React and contributed 450+ questions.",
      },
    ],
    location: 'Remote',
  },
  {
    date: '11/2019 – 02/2020',
    title: 'Google Code In 2019 Mentor',
    company: 'FOSSASIA and Tensorflow',
    points: [
      {
        data:
          "Took initiative in assigning the new developers tasks according to the project's critical needs and the developer's strengths.",
      },
    ],
    location: 'Remote',
  },
  {
    date: '09/2019 – 02/2020',
    title: 'Codeheat Winner',
    company: 'FOSSASIA',
    points: [
      {
        data: 'Regularly contributed to Open Event project.',
      },
      {
        data: 'Created 50+ pull requests and 30+ issues to Open Event project.',
      },
      {
        data:
          'Implemented new features like Cropper, Image resolution coverage , Tax feature enhancement and UI domains',
      },
    ],
    location: 'Remote',
    link: 'https://github.com/fossasia/open-event-frontend/pulls?q=is%3Apr+author%3A%40me+is%3Aclosed',
  },
  {
    date: '01/2020 – 03/2020',
    title: 'Open Source Developer',
    company: 'Aossie',
    points: [
      {
        data:
          'Rearranged the API for Google scholar data scrap.',
      },
      {
        data: 'Rewrite the UI in react.',
      },
    ],
    location: 'Remote',
    link: 'https://gitlab.com/aossie/aossie-scholar/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&author_username=maze-runnar',
  },
  {
    date: '06/2019 – 07/2019',
    title: 'Web Developer',
    company: 'The Sparks Foundation',
    points: [
      {
        data:
          'API for wesite development in Django.',
      },
      {
        data: 'Chatbot messenger integration with python.',
      },
    ],
    location: 'Remote',
  },
];

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
