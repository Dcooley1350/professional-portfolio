import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Devin Cooley', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Devin Cooley: Software Engineer and Web Developer',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Devin Cooley',
  subtitle: 'Call me Devin-Ops, or Web-Devin',
  cta: 'Scrolly Scroll',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I love to build useful and entertaining things. That is why I started my journey to become a software engineer: to build stuff that brings positive change and happiness to our world.',
  paragraphTwo:
    'I became a Web Dev(in) about 3 years ago. By a stroke of chance, I was quickly offered a position as a DevOps engineer. "What the heck is a DevOps engineer?", I thought. After taking the position at Pipeworks Studios, I came to really embrace the DevOps movement.',
  paragraphThree:
    'I like being a DevOps engineer because I get to solve such a wide range of problems for so many different people. I also like being in the mix with new cloud infrastructure, orchestration, and development tools. In the few short years I have been a DevOps engineer I have learned to write more languages and use more tools than many developers learn in a whole career. I am truly never bored with my work.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'LastMile.jpg',
    title: 'TWD: Last Mile',
    info: 'The Last Mile is my second project representing Pipeworks Studios as primary devOps engineer. During Last Mile development I got a chance to expand and improve the systems I designed and implemented during Rival Peak(see below). The game infrastructure consists of Unity clients running in an AWS EKS clusters, backed by an Microsoft Azure serverless backend. My responsibilities included designing, implementing, and administering the cloud infrastructure on which the game ran. I also wrote and maintained the build/deployment tools that the dev team used to build, package, and deliver game software.',
    info2: '',
    url: 'https://gametyrant.com/news/interactive-live-event-the-walking-dead-last-mile-is-a-game-we-can-all-play',
    repo: '', // If no repo, no 'source code' button will show
    button: 'Learn More',
  },
  {
    id: nanoid(),
    img: 'RivalPeak.png',
    title: 'Rival Peak',
    info: 'As DevOps engineer for Pipeworks Studios on RP, the cloud infrastructure, deployment, and development environment were my responsibility. I wrote and managed the Infrastructure as Code for the AWS and Azure cloud infrastructure. I also designed and managed a Jenkins Continuous Integration/Deployment server that built the Unity game and deployed it to AWS, as well as building and deploying the backend serverless services to Azure.',
    info2: '',
    url: 'https://www.facebook.com/gaming/play/rivalpeak',
    repo: '',
    button: 'Learn More',
  },
  {
    id: nanoid(),
    img: 'SpellSlingers.jpg',
    title: 'SpellSlingers',
    info: 'As part of the DevOps team for SpellSlingers(closed beta), I helped design, implement, and manage a microservice infrastrucure running in Kubernetes on AWS cloud infrastructure. I also assisted creating and managing the Jenkins server that built and deployed said microservices.',
    info2: '',
    url: 'https://www.facebook.com/gaming/play/rivalpeak',
    repo: '',
    button: 'Learn More',
  },
  {
    id: nanoid(),
    img: 'NiaNow.png',
    title: 'Nia Now',
    info: "For the past 3 years I have had the privelidge of contracting as a front-end developer on the Nia-Now webapp. I am proud of the work I have done to help bring the Nia creative team's vision and message to fruition.",
    info2: 'Nia Now utilizes a React front-end and a Python Django backend.',
    url: 'https://nianow.com/',
    repo: '',
    button: 'See Live',
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
    button: 'See live',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

export const contactFormData = {
  backendUrl: 'https://public.herotofu.com/v1/5c564b30-7d8e-11ec-93f9-6712a4805a99',
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
