import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Devin Cooley', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Devin Cooley: Software Engineer and Web Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Devin Cooley',
  subtitle: 'Call me Devin-Ops, or Web-Devin',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RivalPeak.png',
    title: 'Rival Peak',
    info: '',
    info2: '',
    url: 'https://www.facebook.com/gaming/play/rivalpeak',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'SpellSlingers.jpg',
    title: 'SpellSlingers',
    info: '',
    info2: '',
    url: 'https://www.facebook.com/gaming/play/rivalpeak',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'NiaNow.png',
    title: 'Nia Now',
    info: "For the past 3 years I have had the privelidge of contracting as a front-end developer on the Nia-Now webapp. I am proud of the work I have done to help bring the Nia creative team's vision and message to fruition.",
    info2: 'Nia Now utilizes a React front-end and a Python Django backend.',
    url: 'https://nianow.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'HasBird.png',
    title: 'HasBird?',
    info: "HasBird? is of a genre I am calling 'semi-educational'. I just enjoy building goofy websites in my free time. Hopefully it will make you laugh, and you just might learn something.",
    info2:
      'This static site was built using Gatsby JS and was styled using Styled-Components. It is hosted in an S3 bucket and delivered though a CloudFront Distribution.',
    url: 'https://hasbird.com/',
    repo: 'https://github.com/Dcooley1350/hasBirds',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/IamDevin5',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/web-devin-cooley/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Dcooley1350',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
