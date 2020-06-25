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
  paragraphOne: "I am a pre-final year undergraduate student at Harcourt Butler Technical University in the Computer Science and Engineering Branch. I have mentored two organizations in Google Code-In this year - @FOSSASIA, @Tensorflow.Besides this, I also mentor IIT Kharagpur Winter of Code. I was selected as a “finalist winner” in this year's fossasia’s open-source competition `Codeheat` and actively contributing to open-source organizations.Also, I have three internships in Web Development",
  paragraphTwo: 'I work on the Ubuntu operating system. Visual Studio Code is my primary text-editor and Sublime text otherwise. My primary languages are Python and javascript. I am efficient and most comfortable in working with React + Django. This is mainly in my Domain. Besides this, I am good at Flask + Ember, UI/UX, RestAPI, Testing, Research and exploring new things. I have good experience in UI as I have worked on the fossasia project Open Event in this field for 6 months.',
  paragraphThree: 'Good At Data Structure and Algorithms and Working on Natural Language Processing.',
  resume: resume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'scholar1.jpg',
    title: 'MyScholar',
    info: 'Google scholar is a metric computation system for researchers with a Google Scholar profile. Google Scholar provides researchers with stats such as the number of publications, citations, h-index and i10 index. But, these metrics are flawed. my Google Scholar extracts some basic information form Google Scholar and computes better metrics, and displays them on another website. So, researchers can now see better, effective metrics with a single click.',
    info2: 'And Scholarly implementation with website to get raw data with fast speed.',
    url:'https://friendly-poincare-d05cd9.netlify.app',
    repo: 'https://github.com/maze-runnar/Google-Scholar', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gitedge.png',
    title: 'GitEdge',
    info: 'A React native mobile application. Using github api V3. Currently the app is fetching User persional information as name , profile picture, email, following , followers , repositories and contribution details. In future version I am planning to use a github calender contribution chart. The app also have the dark and light mode feature.',
    info2: '',
    url: 'https://expo.io/@mazerunner/redemption',
    repo: 'https://github.com/maze-runnar/GitEdge', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'blogs.png',
    title: 'RedBlogs',
    info: 'A basic Blog platform made using ReactJs with Django API for backend. The website has authentication feature, responsive UI, and Dark-mode/Light-mode implementation.',
    info2: '',
    url: 'https://github.com/maze-runnar/stranger-things',
    repo: 'https://github.com/maze-runnar/stranger-things', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'modal.png',
    title: 'Social-Share-Modal',
    info: 'This is a reusable modal component for social sharing and currently under development for "archive.org" website. This project uses lit-element for making components. Initially there was a doubt in project feasibility so I tried to initialize it by myself and try if the solution is feasible or not. I used these polymers to solve the problem.',
    info2: '',
    url: 'https://github.com/maze-runnar/stranger-things',
    repo: 'https://github.com/maze-runnar/modal-component', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'alca.png',
    title: 'Through the Songs',
    info: 'Alcatraz is an application that lets you upload, store, and play all of your music from the cloud. You can now manage and listen to your music from any device, anywhere in the world.',
    info2: 'The project is totally written in Django(frontend + backend)',
    url: '',
    repo: 'https://github.com/maze-runnar/through-the-songs', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'guide.png',
    title: 'The Tourists',
    info: 'Social Networking platform for tourists and guides to interact. The platform for tourists to share their experience and get more reach by your passion. Write Blogs about places you visit, share your memories, interact with more peoples.',
    info2: 'The project is totally written in Django(frontend + backend)',
    url: 'https://thetouristsguides.herokuapp.com/login/',
    repo: 'https://github.com/maze-runnar/thetourists', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'devpost.png',
    title: 'Acads',
    info: 'Facebook messenger chatbot with Python and WitAI integration. The project is a part of facebook messaging hackathon. The chatbot implements messengers Quick Reply feature and Generic Templates. The webhook for the messenger bot is live at https://themazerunner.herokuapp.com/',
    info2: '',
    url: 'https://devpost.com/software/scholar-articles',
    repo: 'https://github.com/maze-runnar/thetourists', // if no repo, the button will not show up
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
    name: 'Machine Learning',
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
  {
    id: uuidv1(),
    name: 'React Native',
  },
  {
    id: uuidv1(),
    name: 'lit-element',
  },
];

// EXPERIENCE DATA
export const worksData = [
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
